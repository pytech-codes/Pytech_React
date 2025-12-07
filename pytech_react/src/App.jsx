import React from 'react'
import Navbar from './components/UserList'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import Test from './components/test'
import UserList from './components/UserList'
import Test2 from './components/Test2'
import Person from './components/Person'
const App = () => {
  const userList = [
    {id:1, name:'pytech', age:22},
    {id:2, name:'anuoluwapo', age:22}
  ]
  var result = userList.map(users => (
    <ul key={users.id}>
      <li>{users.id}.     {users.name}</li>
      <li>{users.id}.     {users.name}</li>
    </ul>

  ))
  return (
    <>
    {/* <Test2 name='Pytech' age={22} isMarried={false} hobbies={['coding', 'sleeping', 'football']} /> */}

    <Person
     name={result}
     
     
     
     />
      {/* <UserList /> */}
      {/* <Hero /> */}
      {/* <HomeCards /> */}
      {/* <Test /> */}
      </>
  )
}

export default App