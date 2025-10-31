import React, {useState}  from 'react'

function password() {
    const  [visible , unvisible]= useState()
  return (
    <div>
        <input type="password" placeholder='Password' />
    </div>
  )
}

export default password
