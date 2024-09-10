import React, { useEffect } from "react";
import Caden from "caden";
import "./App.css";
import "caden/lib/styles/css/index.css";

function App() {
  useEffect(() => {
    Caden.Functions.Console.Boykisser({ small: true });
  }, [])
  
  return (
    <div className="container">
      <div className="section">
        <h1 className="section-title">Buttons</h1>
        <div className="section-content">
          <Caden.UI.Buttons.Submit>Submit</Caden.UI.Buttons.Submit>
        </div>
      </div>
    </div>
  );
}

export default App;
