import React, { Component } from 'react'
import updatedcomponent from './WithCounter'
 class HoverCounter extends Component {
    
    render() {
        //const {count} = this.state
        const {count,increament}=this.props
        return (
            <div>
                <h2 onMouseOver={increament}>hovered {count} times</h2>
            </div>
        )
    }
}


export default updatedcomponent(HoverCounter)


