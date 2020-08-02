import React from  'react'

//export const Greet = ({name,heroName}) => {
//console.log(props)
export const Greet = (props) => {
    const {name,heroName}=props
return (
    <div>
    {/*<h1>Hello {props.name} a.k.a {props.heroName}</h1>
    {props.children}*/}
    <h1>Helllo {name} a.k.a {heroName}</h1>
    </div>
)
}
//export default Greet