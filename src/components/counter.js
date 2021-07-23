import { useState } from "react";
import { useDispatch } from "react-redux";

// importing actions
import { increment, decrement } from "../redux/ducks/counter";

const Counter = (props) => {
  const [vote, setVote] = useState(0);

  // useDispatch hook for dispatching actns
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment()); //dispatched increment actn
    setVote(vote + 1);
  };
  const handleDecrement = () => {
    dispatch(decrement()); // dispatched decrement actn
    setVote(vote - 1);
  };

  return (
    <div className="counterBox">
      <h3>{props.name}</h3>
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
