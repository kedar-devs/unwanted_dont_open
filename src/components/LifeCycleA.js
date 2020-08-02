import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'kedar'
         }
         console.log('constructor call')
     }

     static getDerivedStateFromProps(props,state){
         console.log('getderivedstatefromprops')
         return null

     }
     componentDidMount()
     {
         console.log('componentdidmount')
     }
    render() {
        console.log('rendor')
        return (
            <div>
               LifeCycleA 
               <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
