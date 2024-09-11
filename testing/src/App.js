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
          <Caden.UI.Buttons.Default>Default Button</Caden.UI.Buttons.Default>
          <Caden.UI.Buttons.Submit>Submit Button</Caden.UI.Buttons.Submit>
        </div>
      </div>
      <div className="section">
        <h1 className="section-title">Links</h1>
        <div className="section-content">
          <Caden.UI.Links.Default>Default Link</Caden.UI.Links.Default>
          <Caden.UI.Links.Default filled={true}>Default Link Filled</Caden.UI.Links.Default>
        </div>
      </div>
    </div>
  );
}

export default App;
