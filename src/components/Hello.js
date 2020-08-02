import React from 'react'

const Hello=()=>{
   /* return (
        <div className='dummyclass'> 
        <h1>Hello Kedar</h1>
        </div>
        )*/

        return React.createElement('div', {id:'hello',className:'dummyClass'}, React.createElement('h1', null, 'Hello Kedar'))

}

export default Hello