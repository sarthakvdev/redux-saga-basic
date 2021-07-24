import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/ducks/user";
import Counter from "./components/counter";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  // importing the state variable from store using useSelector hook
  const count = useSelector((state) => state.counter.count);
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <div className="App">
      <h2>Total Votes: {count}</h2>
      {user
        ? user.map((user, index) => <Counter user={user} key={index} />)
        : ""}

      <p className="credits">Built by Surface Dwellers</p>
    </div>
  );
}
