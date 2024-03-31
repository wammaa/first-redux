import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  const count = useSelector(state=>state.count)
  const dispatch = useDispatch()
  const increase = () => {
    dispatch({type:"INCREMENT", payload : {num : 7}})
  }
  const decrease = () => {
    dispatch({type:"DECREMENT", payload : {num : 4}})
  }
  return (
    <div className="main">
      <button onClick={increase}>+7</button>
      <h1>{count}</h1>
      <button onClick={decrease}>-4</button>
    </div>
  );
}

export default App;
