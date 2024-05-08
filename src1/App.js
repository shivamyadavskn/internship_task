import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement} from "./states/reducers/index";

const App = () => {
  const currState=useSelector((state)=>state.number);
  const dispatch=useDispatch();
  return (
    <div>
      <center>
        <h1>{currState}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
      </center>
    </div>
  );
};

export default App;
