import React from 'react'
import { CreateContext } from '../context/Context'
import { useContext } from 'react'

function Aman() {
    const{message,setMessage}=useContext(CreateContext)
  return (
    <div>
      <p>Aman say: {message}</p>
      <button onClick={()=>setMessage("hello sandeep kesa hai yaar tu")}>
        aman sai to sandeep
      </button>
    </div>
  )
}

export default Aman
