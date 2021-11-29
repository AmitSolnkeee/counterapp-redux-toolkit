import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { decrement, increaseAmount, increment } from './redux/slices/counterSlice';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state?.counter)
  return (
    <div className="App">
      <h1>Welcome to react counter</h1>
      <h2>Counter :  {counter?.value}</h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increaseAmount(20))}>increaseByAmount</button>
    </div>
  );
}

export default App;
