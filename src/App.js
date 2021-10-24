
import './App.css';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter';


function App() {


  const {count} =useSelector ((state) => state.counter)
  // const count =useSelector (state => state.counter.count)
  const dispatch = useDispatch();
   

  return (
  
    <div className="App">
      <div className="container">
        <h1>The count is : {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>Increment By 10</button>
      </div>
    </div>
  );
}


export default App;
