import { CreateContext } from "./context/Context";
import { useState } from "react";
import Sandeep from "./components/Sandeep";
import Aman from "./components/Aman";

function App() {
  const [message, setMessage]=useState()


  return (
    <>
    <CreateContext.Provider value={{message, setMessage}}>
       <Aman/>
       <Sandeep/>
    </CreateContext.Provider>
      
    </>
  )
}

export default App
