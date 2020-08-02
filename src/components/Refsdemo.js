import React, { Component } from 'react'
 class Refsdemo extends Component {
     constructor(props) {
         super(props)
         this.inputRefs=React.createRef()
         this.state = {
              
         }
     }
     componentDidMount()
     {
         this.inputRefs.current.focus()
         console.log(this.inputRefs)
     }
     click=()=>
     {
         alert(this.inputRefs.current.value)
     }
    render() {
        return (
            <div>
               <input type="text" ref={this.inputRefs} />
               <button onClick={this.click}>click</button> 
            </div>
        )
    }
}

export default Refsdemo
