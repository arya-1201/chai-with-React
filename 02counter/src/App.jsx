import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);


  let addValue = () => {
    if (counter > 20) {
      alert("can not be greater then 20");
    } else {
      setCounter(counter + 1);
    }
  };
  let removeValue = () => {
    if (counter < 0) {
      alert("can not be less then 0");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}
export default App;
