import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    return time.toLocaleTimeString();
  };

  return (
    <div className="app">
      <div className="glass-clock">
        <h1>{formatTime()}</h1>
      </div>
    </div>
  );
}

export default App;
