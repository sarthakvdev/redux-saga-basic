import { useState } from "react";
import { useDispatch } from "react-redux";

// actions
import { increment, decrement } from "../redux/ducks/counter";

const Counter = (props) => {
  const [vote, setVote] = useState(0);

  // useDispatch hook for dispatching actions
  const dispatch = useDispatch();
  const { name } = props;
  const handleIncrement = () => {
    dispatch(increment());
    setVote(vote + 1);
  };
  const handleDecrement = () => {
    dispatch(decrement());
    setVote(vote - 1);
  };

  return (
    <div className="counterBox">
      <h3>{name}</h3>
      <h4>Votes: {vote}</h4>
      <button className="button" onClick={handleDecrement}>
        -
      </button>
      <button className="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;
