import './App.css';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from './state/action-creator/action-creator.js';

function App() {
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();
  const { deposit, withdraw } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => deposit(1000)}>Deposit</button>
      <button onClick={() => withdraw(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
