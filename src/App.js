import React, {useState} from 'react';
import './App.css';
import Field from './components/Field/Field'
import FormGroup from './components/FormGroup/FormGroup'

function App() {
  const state = {
     points: [
      { name: "startPoint", color:"red", x: "0", y: "0" },
      { name: "endPoint",color:"red", x: "400", y: "300" },
      { name: "controlPoint1",color:"green" ,x: "100", y: "100" },
      { name: "controlPoint2",color:"green", x: "500", y: "100" },
    ],
  }

  const [coords, setCoords] = useState({
    sx: 0,
    sy: 0,
    ex: 800,
    ey: 800,
    c1y: 200,
    c1x: 700,
    c2y: 800,
    c2x: 300,
  });

  function onChangeHandler(e) {
    if (Number.isInteger(+e.target.value)) setCoords({...coords, [e.target.name]: +e.target.value})
    
  }

  
  // const [startPoint, setStartPoint] = useState({name: startPoint, x:0 , y:0})
  return (
    <div className="App">
      <Field coords={coords}  />
      <FormGroup coords={coords} onChange={onChangeHandler}/>
    </div>
  );
}

export default App;
