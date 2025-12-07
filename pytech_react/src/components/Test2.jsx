import React from 'react'

const Test2 = (props) => {
    console.log(props)
  return (
    <section>
        <h1>My name is {props.name}</h1>
        <h2>I am {props.age} yrs old</h2>
        <h3>my hobbies are {props.hobbies}</h3>
    </section>
  )
}

export default Test2