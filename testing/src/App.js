import { UI } from "caden";
import "./App.css";
import "caden/lib/styles/css/index.css";

function App() {
  return (
    <div className="container">
      <div className="section">
        <h1 className="section-title">Buttons</h1>
        <div className="section-content">
          <UI.Buttons.Submit>Submit</UI.Buttons.Submit>
        </div>
      </div>
    </div>
  );
}

export default App;
