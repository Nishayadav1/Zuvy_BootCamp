import './App.css'

function App() {
let count;
  return (
    <>
      <h1>Counter without state</h1>
      <h2>{count}</h2>
      <button style={{backgroundColor:'green', marginRight:"20px"}}
            onClick=()=>{count+=1}>Increment +1</button>
      <button style={{backgroundColor:'orange'}}>Decrement -1</button>
    </>
  )
}

export default App
