import React from 'react'

const UserList = () => {
  const user =[
    {id:1, name:'Alex',age:25},
    {id:2, name:'Bob',age:28},
    {id:3, name:'Charles',age:29}
  ]
  return (
    <div>
{user.map((users,index) => (
  <ul key={users.id} className='list-disc space-y-3'>
    
    <li>{users.name}</li>
    <li>{users.age}</li>
  </ul>
))}
    </div>
  )
}

export default UserList