import React, { Component } from 'react'

 class Counter2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }

    }
    increament=()=>
    {
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    }
    render() {
        return (
            <div>
             {this.props.render(this.state.count,this.state.increament)}
            </div>
        )
    }
}

export default Counter2
