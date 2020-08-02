import React, { Component } from 'react'
import FRInput from './FRInput'

 class FRParentInput extends Component {
     constructor(props) {
         super(props)
            this.inputref=React.createRef()
         this.state = {
              
         }
     }
     clicks=()=>{
         this.inputref.current.focus()
     }
    render() {
        return (
            <div>
              <FRInput ref={this.inputref} />
              <button onClick={this.clicks}>focus input</button>  
            </div>
        )
    }
}

export default FRParentInput
