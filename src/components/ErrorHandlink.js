import React from 'react'

function ErrorHandlink({heroname}) {
    if(heroname === 'joker'){
        throw new Error('No a hero');
        
    }
    return (
        <div>
            {heroname}
        </div>
    )
}

export default ErrorHandlink
