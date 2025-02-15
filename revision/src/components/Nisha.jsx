import { useContext } from "react"
// import FriendProvide from "./FriendProvide"
import { FriendContext } from "../context/FriendProvide";

function Nisha() {
    const {message, setMessage}=useContext(FriendContext);


  return (
    <div>
      <h1>Nisha say : {message}</h1>
      <button onClick={()=>{setMessage("Hello kaise ho Anchal")}}>
        send to mgs to anchal
      </button>
    </div>
  )
}

export default Nisha
