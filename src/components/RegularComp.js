import React, { Component } from 'react'

 class RegularComp extends Component {
    render() {
        console.log('regular')
        return (
            <div>
                Regularcomponet {this.props.name}
            </div>
        )
    }
}

export default RegularComp
