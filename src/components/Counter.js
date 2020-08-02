import React, {Component} from 'react'

class Counter extends Component{

    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    changeCount()
    {
        /*this.setState({
            count:this.state.count+1
        },
        () => {
            console.log('callback value', this.state.count)
        }
        )*/
        this.setState((prevState,props/*additinal arguement*/) => ({
            count:prevState.count+1
        }))
    }

    increament()
    {
        this.changeCount()
        this.changeCount()
        this.changeCount()
    }
    render(){
        
        return (
            <div>
                count - {this.state.count}<br></br>
                <button onClick={()=>this.increament()}>Increament</button>

            </div>

        );
    }
}
export default Counter