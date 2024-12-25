import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  function increase() {
    let cnt = counter;
    if (cnt + 1 < 21) {
      cnt++;
    } else {
      cnt = 20;
      alert("Can't increase more than 20");
    }

    setCounter((counter = cnt));
  }

  function decrease() {
    let cnt = counter;
    if (cnt - 1 >= 0) {
      cnt--;
    } else {
      cnt = 0;
      alert("Can't decrease more than 0");
    }

    setCounter((counter = cnt));
  }

  return (
    <>
      <h1>Hello Sir</h1>
      <p>Counter : {counter}</p>

      <button onClick={increase}>increase</button>
      <br />
      <button onClick={decrease}>decrease</button>
    </>
  );
}

export default App;
