import React from 'react'
// State Demo in Class Component:
class StateDemo extends React.Component{
    constructor(){
        super()// most importent bcoz its call parent constructor(React.Component class)
    this.state = {
        name: 'Peter',
        age: 22,
        shareCount:0,
    }
    }
    updateValue(){
        // this.setState({
        //     name: 'Peter Parker',
        //     age: 23,
        //     shareCount: this.state.shareCount + 1,
        // })
        // //--------------- Hold Previous Value ? Not Holding -----------------------------
        // //---------------Update Previous Value ? How -----------------------------
        // this.setState({
        //     name: 'Peter Parker',
        //     age: 23,
        //     shareCount: this.state.shareCount + 1, //1
        // })
        // this.setState({
        //     name: 'Peter Parker',
        //     age: 23,
        //     shareCount: this.state.shareCount + 1, //1
        // })
        // this.setState({
        //     name: 'Peter Parker',
        //     age: 23,
        //     shareCount: this.state.shareCount + 1, //1
        // })
        //----------------- Now Hold Previous Value ---------------------------
        // ----------- Increment by 3

        this.setState((prevState)=>(
            console.log(prevState),
                {
                name: 'Peter Parker',
                age: 23,
                shareCount: prevState.shareCount + 1, // 1
                }
            )
        )
        this.setState((prevState)=>(
            console.log(prevState),

                {
                shareCount: prevState.shareCount + 1, // 2
                }
            )
        )
        this.setState((prevState)=>(
            console.log(prevState),

                {
                shareCount: prevState.shareCount + 1, // 3
                }
            )
        )
    }
    previousValue(){
        this.setState({
            name: 'Peter',
            age: 22,
            shareCount : this.state.shareCount -1,
        })
    }
    render(){
        return (
            <>
            <h1>Hello this is React State Using Class Component</h1>
            <h2>Name: {this.state.name}</h2>
            <h2>Age: {this.state.age}</h2>
            <h2>The content Share by: {this.state.shareCount} </h2>
            {/* <button onClick={()=>this.setState({shareCount: this.state.shareCount + 1})}>Share</button> */}
            <button onClick={()=>this.updateValue()} >Share</button>
            <button onClick={()=>this.previousValue()} >Previous</button>
            </>
        )
    }

  
}

export default StateDemo;

// function State() {
//   return (
//     <div>
//       <h1>Hello State</h1>
//     </div>
//   )
// }

// export default State
