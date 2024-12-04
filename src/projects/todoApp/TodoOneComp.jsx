import React, { useEffect, useState } from 'react'
import './todo.css'

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
        <main>
            <header>
                <h1>Todo Task</h1>
                <p>{timeDate}</p>
            </header>
            <section>
                <form onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        name='inputTask'
                        value={inputTask.taskName} // important
                        onChange={(e) => handleOnchangeInputTask(e.target.value)}
                        placeholder='Add a Task'
                    ></input>
                    <button type="submit">Add Task</button>
                </form>
            </section>
            <section>
                <ul>
                    {
                        task.map((curTask) => {
                            return (
                                <li
                                    key={curTask.id}
                                    className={curTask.done ? "done" : "pending"}
                                >
                                    {curTask.taskName}
                                    <button onClick={() => handleDoneTask(curTask.taskName)}>Done</button>
                                    <button onClick={() => handleDeleteTask(curTask.taskName)} >Delete</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
            <section>
                <button onClick={handleClearAllTask}>Clear All Tasks</button>
                <p>Task Count: {task.length}</p>
                <p>Task Completed: {task.filter(t => t.done).length}</p>
                <p>Task Pending: {task.filter(t => !t.done).length}</p>
            </section>
        </main>
    )
}

export default TodoOneComp
