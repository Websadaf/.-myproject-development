import React, {useState}  from 'react'
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";
import './popups/password.css'



function Password() {
  const [Show , setShow]= useState(true)

const tooglePassword=() =>{
  
  setShow(!Show)
  }
     return (
    <div>
  <h1>Sign Up</h1>
  <div className="sign">
  
  <input type={Show ? 'Name' : 'text'} placeholder='First Name' ></input>
  <input type={Show ? 'Name' : 'text'} placeholder='Sur Name' ></input>
  <input type={Show ? 'Name' : 'text'} placeholder='Date of Birth ' ></input>

  <input type={Show ? 'Name' : 'text'} placeholder='Phone Number or Email'></input>
      <input type={Show ? 'Name' : 'text'} placeholder='Confirm Password'></input>

       <div className="icon">
      <input type={Show ? 'password' :'text'} placeholder='Password'></input>
      
    

{
  Show ? < FaEye onClick={tooglePassword} /> : <FaRegEyeSlash onClick={tooglePassword} />
}
</div>

<div className="btn">
<button>Submit</button>
      <button>Clear</button>
      </div>
</div>
</div>
       

      


  
  )
}

export default Password
