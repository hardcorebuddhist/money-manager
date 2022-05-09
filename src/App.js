import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, reset } from "./store/balance/slice";
import { selectBalance } from "./store/balance/selectors";
import { useState } from "react";

function App() {
  const [customAmount, setCustomAmount] = useState(0);
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
      <div className="App">
        <p>Balance: {balance}$</p>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </button>
      </div>
      <br />
      <br />
      <input
        type="number"
        value={customAmount}
        onChange={(event) => {
          setCustomAmount(parseInt(event.target.value));
        }}
      />
      <br />
      <button
        onClick={() => {
          dispatch(deposit(customAmount));
          setCustomAmount(0);
        }}
      >
        Deposit custom amount
      </button>
    </div>
  );
}

export default App;
