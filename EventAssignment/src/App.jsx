import './App.css';

let counter = 0;

function eventHandleAdd() {
  counter += 1;
  document.getElementById('counter').innerText = `Counter: ${counter}`;
  document.getElementById('dec').style.display = 'inline-block'; 
}

function eventHandleMins() {
  if (counter > 0) {
    counter -= 1;
    document.getElementById('counter').innerText = `Counter: ${counter}`;
  }
  
  if (counter === 0) {
    document.getElementById('dec').style.display = 'none'; 
  }
}

function App() {
  return (
    <>
      <h1>Counter without State</h1>
      <h2 id="counter">Counter: {counter}</h2>
      <button onClick={eventHandleAdd}>Increment</button>
      <button onClick={eventHandleMins} id="dec" style={{ display: 'none' }}>Decrement</button>
    </>
  );
}

export default App;
