import './App.css'
import { useState } from 'react'

function App() {
  const [cal, setCal] = useState({
    num1: '',
    num2: '',
    result: null,
    operator: '',
  });

  const copyObje = (e) => {
    setCal({ ...cal, [e.target.name]: e.target.value });
  };

  const addNum = () => {
    setCal({ ...cal, result: parseFloat(cal.num1) + parseFloat(cal.num2), operator: '+' });
  };

  const minNum = () => {
    setCal({ ...cal, result: parseFloat(cal.num1) - parseFloat(cal.num2), operator: '-' });
  };

  const mulNum = () => {
    setCal({ ...cal, result: parseFloat(cal.num1) * parseFloat(cal.num2), operator: '*' });
  };

  const divNum = () => {
    setCal({ ...cal, result: parseFloat(cal.num1) / parseFloat(cal.num2), operator: '/' });
  };

  const resetResult = () => {
    setCal({ num1: '', num2: '', result: null, operator: '' });
  };

  return (
    <>
      <h1>Basic Calculator with State</h1>
      <input
        type='number'
        name='num1'
        value={cal.num1}
        onChange={copyObje}
        placeholder='First Number'
      />

      <span>{cal.operator}</span>

      <input
        type='number'
        name='num2'
        value={cal.num2}
        onChange={copyObje}
        placeholder='Second Number'
      />

      <br />

      <button onClick={addNum}>+</button>
      <button onClick={minNum}>-</button>
      <button onClick={mulNum}>*</button>
      <button onClick={divNum}>/</button>
      <button onClick={resetResult}>Reset</button>

      <h2>Result: {cal.result !== null ? cal.result : 'No result yet'}</h2>
    </>
  )
}

export default App;

// Modify the previous basic calculator assignment and use only one state for both the operands.


// const[num1,setNum1]=useState('')
  // const[num2,setNum2]=useState('')
  // const[result,setResult]=useState(null)
  // const[operator,setOperator]=useState('')

  // const addNum=()=>{
  //   setResult(parseFloat(num1)+parseFloat(num2))
  //   setOperator('+')
  // }
  // const minNum=()=>{
  //   setResult(parseFloat(num1)-parseFloat(num2))
  //   setOperator('-')
  // }
  // const mulNum=()=>{
  //   setResult(parseFloat(num1)*parseFloat(num2))
  //   setOperator('*')
  // }
  // const divNum=()=>{
  //   setResult(parseFloat(num1)/parseFloat(num2))
  //   setOperator('/')
  // }

  // const restResult=()=>{
  //   setNum1('')
  //   setNum2('')
  //   setResult(null);
  //   setOperator('')
  // }

  // return (
  //   <>
  //     <h1>Basic Calculator with state</h1>
  //     <input type='number' value={num1} 
  //       onChange={(i)=>setNum1(i.target.value)}
  //       placeholder='First Number'
  //     />
      
  //     <span>{operator}</span>

  //     <input type='number' value={num2} 
  //       onChange={(i)=>setNum2(i.target.value)}
  //       placeholder='Second Number'
  //     />



  //     <h2>{result}</h2>
  //     <button onClick={addNum}>+</button>
  //     <button onClick={minNum}>-</button>
  //     <button onClick={mulNum}>x</button>
  //     <button onClick={divNum}>/</button>
  //     <button onClick={restResult}>Reset</button>