import { useSelector } from "react-redux";
import Counter from "./components/counter";
import "./styles.css";

export default function App() {
  // importing the state variable from store: useSelector hook
  const people = [
    "Bruce Wayne",
    "Selina Kyle",
    "Bob Dylan",
    "Steve Jobs",
    "Harvey Dent"
  ];

  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <h2>Total Votes: {count}</h2>
      {people.map((name) => (
        <Counter name={name} />
      ))}
    </div>
  );
}
