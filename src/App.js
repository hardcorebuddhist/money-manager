import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "./store/balance/slice";
import { selectBalance } from "./store/balance/selectors";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);

  return (
    <div>
      <div className="App">
        <p>Balance: {balance}$</p>
        <button
          onClick={() => {
            dispatch(deposit(10));
          }}
        >
          Deposit 10$
        </button>
      </div>
      <div className="App">
        <p>Balance: {balance}$</p>
        <button
          onClick={() => {
            dispatch(withdraw(10));
          }}
        >
          Withdraw 10$
        </button>
      </div>
    </div>
  );
}

export default App;
