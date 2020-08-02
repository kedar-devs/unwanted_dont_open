import React from 'react'
import Person from './Person'
function NameList() {
    
    const name=['tony','bruce','natasha','bruce']
const nameList= name.map((realname,index)=><h2 key={index}>{index}.{realname}</h2>)
    /*const person=[
        {
            id:1,
            name:'tony',
            power:'intelligence',
            hero:'Iron man'
        },
        {
            id:2,
            name:'natasha',
            power:'Beauty',
            hero:'black widow'
        },
        {
            id:3,
            name:'Bruce',
            power:'Anger',
            hero:'hulk'
        }
    ]*/
    //const personName=person.map(person=>/*<h2>the man named {person.name} has the power of {person.power} the person is also known as {person.hero}</h2>*/)
      //const personName=person.map(person=><Person key={Person.id} person={person}></Person>)
    return (
        <div>
           {/*<h2>{name[0]}</h2>
           <h2>{name[1]}</h2>
            <h2>{name[2]}</h2>*/}
            {/*{
                name.map(realname =><h2>{realname}</h2>)
            }*/}
            {nameList}
            {/*personName*/}

        </div>
    )
}

export default NameList

