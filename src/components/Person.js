import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>the man named {person.name} has the power of {person.power} the person is also known as {person.hero}</h2>
        </div>
    )
}

export default Person
