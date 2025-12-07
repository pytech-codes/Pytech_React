import React from 'react'

const Test = () => {
    const name = 'Pytech';
    const x = 12;
    const y = 423;
    const names = ['Brad', 'Mary','joe', 'small'];
    const loggedIn = true;
    const styles = {
        color: 'red',
        fontSize:'55px'
    }
  return (
    <>
    <div className='text-5xl text-red-600'>App</div>
    <p style={{color:'red'}}>Hello {name}</p>
    <p>The sum of {x} and {y} is {x+y}</p>
   {names.map(name => (
    <ul>
      <li>{name}</li>
    </ul>
   ))}
   
    </>
  )
}

export default Test