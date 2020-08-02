import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'hello'
        }
        //this.clicks=this.clicks.bind(this)
    }
    /*clicks()
    {
        this.setState({
            message:'good bye'
        })
        console.log(this)
    }*/

    clicks =()=>{
        this.setState({
            message:'good bye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.clicks.bind(this)}>CLICK</button>*/}
                {/*<button onClick={()=> this.clicks()}>CLICK</button>*/}
                <button onClick={this.clicks}>CLICK</button>
            </div>
        )
    }
}

export default EventBind
