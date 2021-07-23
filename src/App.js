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

  const user = useSelector((state) => state.user.user);
  console.log(user);
  // importing the state variable from store: useSelector hook
  const people = ["Bruce Wayne", "Selina Kyle", "Bob Dylan"];

  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <h2>Hello, {user ? user.firstName : ""}</h2>
      <h2>Total Votes: {count}</h2>
      {people.map((name, index) => (
        <Counter name={name} key={index} />
      ))}

      <p className="credits">Made by Surface Dwellers</p>
    </div>
  );
}
