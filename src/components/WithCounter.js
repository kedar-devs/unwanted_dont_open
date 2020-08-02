import React from 'react'

const updatedcomponent= OriginalComponent =>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        increament=()=>
        {
           this.setState(prevState =>{
               return {
                   count:prevState.count+1
               }
           })
        }
        render(){
            return <OriginalComponent count={this.state.count}
            increament={this.increament}
            />
        }
    }
    return NewComponent
}

export default updatedcomponent
