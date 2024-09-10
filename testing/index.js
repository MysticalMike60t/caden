import React from 'react';
import ReactDOM from 'react-dom/client';
import { UI } from '../src'; // Import your components here

const App = () => (
  <div>
    <UI.Buttons.Submit>
      Submit
    </UI.Buttons.Submit>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);