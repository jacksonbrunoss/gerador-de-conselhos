import React from "react";
import "./App.css";

import Advice from "./components/Advice";

const apiURL = `https://api.adviceslip.com/advice`;

function App() {
  const [advice, setAdvice] = React.useState([]);

  const getHandleAdvice = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    setAdvice(data.slip);
  };

  React.useEffect(() => {
    getHandleAdvice();
  }, []);

  console.log(advice);
  return (
    <main className="Wrapper">
      <Advice
        id={advice.id}
        advice={advice.advice}
        setRandom={getHandleAdvice}
      />
    </main>
  );
}

export default App;
