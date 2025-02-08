import './App.css'
import { useState } from 'react';

const App = () => {
   const [num1, setNum1]=useState('')
   const [num2,setNum2]=useState('')
   const [output, setOutput]=useState('')
   const [operator,setOperator]=useState('')


  const checkOperation=(operation)=>{
    setOperator(operation);
    let res;
    if (operation==='+'){
      res=num1+num2;
    }else if (operation==='-'){
      res=num1-num2;
    } else if(operation==='*'){
      res=num1*num2;
    }else if (operation==='/'){
      res=num2!==0 ? num1 / num2 : "cannnot divide by 0" ;
    }
    setOutput(res)
  }

  const reset=()=>{
    setNum1('')
    setNum2('')
    setOutput('')
    setOperator('')
  }

   return(
      <>
      <h1>Calculator</h1>

      <input
        type='number'
        value={num1}
        onChange={(e)=>setNum1(Number(e.target.value))}/>
        
        <span>{operator}</span>
        <input
        type='number'
        value={num2}
        onChange={(e)=>setNum2(Number(e.target.value))}/>

      <div>
        <button onClick={()=>checkOperation('+')}>+</button>
        <button onClick={()=>checkOperation('-')}>-</button>
        <button onClick={()=>checkOperation('*')}>*</button>
        <button onClick={()=>checkOperation('/')}>/</button>
        <button onClick={reset}>Reset</button>
      </div>  
      <h2>Result : {output}</h2>
      </>
   )
};

export default App;
