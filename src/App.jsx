import { useState } from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function App() {
  // let num = 0

 const [num , setNum] = useState (0)
  return (
    <>
    <div id="maindiv">
   <button id="add" onClick={()=>{
    setNum(num +1);
    
   }}>Add</button>

  
   <br/><br/>
  <span>{num }</span>
   <br/>

   <button id="sub" onClick={()=>{
    setNum(num-1)
    
   }}>Sub</button>
   </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
