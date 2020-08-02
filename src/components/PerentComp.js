import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import Memocomp from './Memocomp'

class PerentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'kedar'
        }
    }
    componentDidMount()
    {
        setInterval(()=>{
            this.setState({
                name:'kedar'
            })
        },2000)
    }
    
    render() {
        console.log('parent')
        return (
            <div>
               PerentComp
               <Memocomp name={this.state.name} />
               {/*<RegularComp name={this.state.name} />
               <PureComp name={this.state.name} />*/}
            </div>
        )
    }
}

export default PerentComp
