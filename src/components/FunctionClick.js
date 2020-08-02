import React from 'react'

function FunctionClick() {
    function clickHandler()
    {
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler/*do not add ()*/}>Click</button>
        </div>
    )
}

export default FunctionClick
