import './btn.css'
function Btn(props) {
  return (
    <div className='btnstyle'>
    <button style={{backgroundColor:"blue"}}>{props.btn1}</button>
    <button style={{backgroundColor:"gray"}}>{props.btn2}</button>
    <button style={{backgroundColor:"green"}}>{props.btn3}</button>
    <button style={{backgroundColor:"red"}}>{props.btn4}</button>
    <button style={{backgroundColor:"yellow", color:"black"}}>{props.btn5}</button>
    </div>
  )
}

export default Btn

