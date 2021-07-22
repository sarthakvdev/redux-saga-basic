import { useDispatch } from "react-redux";
// actions
import { increment, decrement } from "../redux/ducks/counter";

const Counter = () => {
  // useDispatch hook for dispatching actions
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <button className="button" onClick={handleDecrement}>
        decrement
      </button>
      <button className="button" onClick={handleIncrement}>
        increment
      </button>
    </div>
  );
};

export default Counter;
