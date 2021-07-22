import { useSelector } from "react-redux";
import Counter from "./components/counter";
import "./styles.css";

export default function App() {
  // importing the state variable from store
  // using useSelector hook
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="App">
      <h2>Count: {count}</h2>
      <Counter />
    </div>
  );
}
