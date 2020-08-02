import React, { Component } from 'react'

export class ClickCountertwo extends Component {
    
    
    render() {
        const {count,increament}=this.props
        return (
            <div>
                <button onClick={increament}>clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCountertwo
