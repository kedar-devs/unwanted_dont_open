import React, { Component } from 'react'
import Input from './Input'
export class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef=React.createRef()

        this.state = {
             
        }
    }
    clicks=()=>{
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
               <Input ref={this.componentRef} />
                <button onClick={this.clicks}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
