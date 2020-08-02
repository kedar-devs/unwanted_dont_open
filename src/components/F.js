import React, { Component } from 'react'
import { userConsumer } from './UserContext'

 class F extends Component {
    render() {
        return(
            <userConsumer>
                {
                    username=>{
                            return <h1>Hello {username}</h1>
                    }
                }
            </userConsumer>
        )
    }
}

export default F
