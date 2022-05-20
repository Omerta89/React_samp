import { useState } from 'react';
import './App.css';
import Testapp from './Testapp';

const y = 'HELLO'

function App() {
  var [Counter, setCounter] = useState(2);
const [show, setshow] = useState(true)

  return (
    <div className="App">
      {Counter}
      <button style={{ color: 'blue' }} >Click</button>
      <button style={{ color: 'red' }} >Click</button>
      <button style={{ color: 'green' }} >{y}</button>
      <button style={{ width: Counter * 50 }}>Hello</button>
      <button className='comp' onClick={() => { setCounter(Counter + 1) }}>{Counter}</button><br></br>
      <button style={{ padding: Counter }} onClick={() => { setCounter(Counter++); console.log(Counter) }} >increase size</button><br></br>

      <button onClick={()=>{setshow(!show)}} >{show && 'x'}</button><br></br>
      <button onClick={()=>{setshow(!show)}} >{show ? 'x' : 'o'}</button>



      <button onClick={() => { Testapp(); console.log('testapp'); }} >testapp component</button>
    </div>
  );
}

export default App;