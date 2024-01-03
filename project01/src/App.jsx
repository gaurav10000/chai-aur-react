import { useState } from "react";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(0);
  const increaase = () => {
    setCounter(counter < 20 ? counter + 1 : counter);
  };
  const decrease = () => {
    setCounter(counter > 0 ? counter - 1 : counter);
  };
  return (
    <>
      <h1>{counter}</h1>
      <div className="controllers">
      <button onClick={increaase}>Increase</button>
      <button onClick={decrease}>Decrease </button>
      </div>
    </>
  );
}

export default App;
