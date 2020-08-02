import React, { Component } from 'react'
import updatedcomponent from './WithCounter'
 class ClickCounter extends Component {
    
    render() {
        //const {count} =this.state
        const {count, increament}=this.props
        return (
            <div>
                <p> im sexy and i know it </p>
            <button onClick={increament}>Clicked {count} times</button>
            </div>
        )
    }
}

export default updatedcomponent(ClickCounter)

