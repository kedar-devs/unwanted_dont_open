import React, { Component } from 'react'

 class HoverCount2 extends Component {
    
    render() {
        const {count,increament}=this.props
        return (
            <div>
             <h2 onMouseOver={increament}>hovered {count} over </h2>   
            </div>
        )
    }
}

export default HoverCount2
