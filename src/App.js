import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {
  const [display, setDisplay]=React.useState(["Zia", "Asna"])
  return (
    <div className="App">
     {
      display.length === 0 ? 
      <h6>You are all caught up!</h6>:
      <h6>You have {display.length} unread {display.length > 1 ? "messages." : "message."}</h6>
     }
    </div>
  );
}

export default App;
