import React,{useState} from 'react'
import './popup.css'

function popup() {
    const [text, setText] = useState(false)
    
    
  return (
    <div>
      <button className='btn' onClick={()=>setText(true)}>Open PopUP</button>
      {
       
        text &&
         
      <div className="pop" style={{width:'330px', height:'100px', textAlign:'center',padding:'10px 0'}}>
        
      
        <div className="up">
          <div className="rap" style={{display:'flex', justifyContent:'space-between'}}>
          <h1>Form</h1>
          <button onClick={()=>setText(false)}>X</button>
          <p>hey this is a simple modale popup create by me</p>
          </div>


      
        </div>
      </div>
      
      }
    </div>
    
  )
}

export default popup

    