import {useState} from 'react'
import { FriendContext } from './context/FriendProvide'
import Nisha from './components/Nisha'
import Anchal from './components/Anchal'



function App(){
  // declare a use 
  const [message, setMessage] = useState("")

  // make a provider 
  return(
    <> 

      <FriendContext.Provider value={{message, setMessage}}>
        <Nisha />
        <Anchal />
      </FriendContext.Provider>
    </>
  )
  
}
export default App;