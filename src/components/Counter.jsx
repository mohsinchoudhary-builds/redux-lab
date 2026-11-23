import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="box">
      <h2>Redux Counter</h2>
      <p className="count">{count}</p>
      <div className="buttons">
        <button className="btn-inc" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="btn-dec" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button className="btn-reset" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;