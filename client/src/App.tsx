import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/todos")
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message ? "message = " + message : "Extra Loading ..."}</p>
      </header>
    </div>
  );
}

export default App;
