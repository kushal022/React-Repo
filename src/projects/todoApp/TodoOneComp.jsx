import React, { useEffect, useState } from 'react'
import './todo.css'
import { MdDeleteForever } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";

const TodoOneComp = () => {
    const [task, setTask] = useState([]);
    const [inputTask, setInputTask] = useState({ id: '', taskName: '', done: false });
    const [timeDate, setTimeDate] = useState('')

    // handel onChange/ Input Task functionality
    const handleOnchangeInputTask = (value) => {
        setInputTask({ id: value, taskName: value, done: false });
    }

    // handle form submit
    const handleOnSubmit = (event) => {
        event.preventDefault();
        // Destracture input Obj 
        const { id, taskName, done } = inputTask;
        // if taskName is empty, do not add again
        if (taskName === '') return;
        // check if task already exists
        const isTaskNameMatch = task.find((curTask) => curTask.taskName === taskName)
        // if task already exists, do not add again
        if (isTaskNameMatch) return;

        // set input task to task array
        setTask((prevTask) => [...prevTask, { id: id, taskName: taskName, done: done }])
        //set input task initial
        setInputTask({ id: '', taskName: '', done: false });
    }

    // handle delete task functionality
    const handleDeleteTask = (curTaskValue) => {
        const updatedTasks = task.filter(t => t.taskName !== curTaskValue) // remember that true values are included in it and falsy excluded
        setTask(updatedTasks)
    }
    // handle Done task functionality:
    const handleDoneTask = (curTaskValue) => {
        const doneTask = task.map(curTask => {
            if (curTask.taskName === curTaskValue) {
                return { ...curTask, done: !curTask.done }
            } else { return curTask }
        })
        // console.log(doneTask)
        setTask(doneTask);
    }

    // handle clear all task functionality
    const handleClearAllTask = () => {
        setTask([]);
    }

    // data and time:
    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            const time = date.toLocaleTimeString()
            const day = date.toLocaleDateString()
            setTimeDate(`Today: ${day} , ${time}`)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    // console.log('hello')
    return (
        <main className='todo-container'>
            <header>
                <h1>Todo Task</h1>
                <p>{timeDate}</p>
            </header>
            <section className='todo-form-container'>
                <form
                    className='todo-form'
                    onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        name='inputTask'
                        value={inputTask.taskName} // important
                        onChange={(e) => handleOnchangeInputTask(e.target.value)}
                        placeholder='Write your Task here !!'
                    ></input>
                    <button type="submit">Add Task</button>
                </form>
            </section>
            <section className='todo-list-container'>
                <ul>
                    {
                        task.map((curTask) => {
                            return (
                                <li
                                    key={curTask.id}
                                    className={curTask.done ? "done" : "pending"}
                                >
                                    <p
                                        style={{ backgroundColor: curTask.done ? '#2c5d63' : '#a2c11c' }}
                                    >{curTask.taskName}</p>
                                    <button
                                        style={{ color: curTask.done ? '#a2c11c' : '#2c5d63' }}
                                        className='check-btn'
                                        onClick={() => handleDoneTask(curTask.taskName)}><FaCheckDouble /></button>
                                    <button
                                        style={{ color: 'red' }}
                                        className='delete-btn'
                                        onClick={() => handleDeleteTask(curTask.taskName)} ><MdDeleteForever /></button>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
            <section className='todo-footer'>
                <div>
                    <p>All Tasks: <span>{task.length}</span> </p>
                    <p>Completed: <span> {task.filter(t => t.done).length}</span></p>
                    <p>Pending: <span style={{ color: 'red' }}>{task.filter(t => !t.done).length}</span></p>
                </div>
                <button className='clear-btn' onClick={handleClearAllTask}>Clear All Tasks</button>
            </section>
        </main>
    )
}

export default TodoOneComp
