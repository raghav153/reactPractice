import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(20);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (charAllowed) str += "!@#$%^&*()_+|~`";
    if (numAllowed) str += "0123456789";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1);

      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword]);

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(3,6)
    window.navigator.clipboard.writeText(password)
    alert("Password Copied")
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numAllowed, passwordGenerator]);

  return (
    <>
      <div className="bg-slate-900 w-full max-w-[500px] mx-auto my-4 flex flex-wrap justify-center flex-col content-center p-2 rounded-2xl text-white">
        <div className="flex justify-center ">
          <input
            className="rounded outline-none mr-2 w-full text-black p-1"
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button className="bg-blue-400 hover:bg-blue-700 active:bg-blue-950 rounded px-2 py-1 font-bold text-white"
          onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>

        <div className="mt-2 flex justify-center">
          <div className="mr-3">
            <input
              className="m-1.5 cursor-pointer "
              type="range"
              min={10}
              max={99}
              value={length}
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />
            <label htmlFor="">Length ({length})</label>
          </div>

          <input
            className="m-1.5"
            type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="">Numbers</label>

          <input
            className="m-1.5"
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="">Special Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
