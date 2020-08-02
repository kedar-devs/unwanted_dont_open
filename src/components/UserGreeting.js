import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn: false
         }
     }
     
    render() {
        return this.state.isLoggedIn && <div>welcome kedar</div>
        /*return(
            this.state.isLoggedIn ?
            <div>welcome kedar</div>:
            <div>welcome Guest</div>
        )*/
        
        /*let message
        if(this.state.isLoggedIn)
        {
            message=<div>welcome kedar</div>
        }
        else{
            message=<div>welcome guest</div>
        }
        return(
            message
        )*/
        /*if (this.state.isLoggedIn){
            return(
                <div>
                    welcome kedar
                </div>
            )
        }
        else{
            return(
                <div>
                    welcome Guest
                </div>
            )
        }*/

        /*return (
            <div>
            <div>
               welcome kedar 
            </div>
            <div>welcome guest</div>
            </div>
        )*/
        
    }
}

export default UserGreeting
