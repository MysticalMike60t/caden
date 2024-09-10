import React from 'react';
import ReactDOM from 'react-dom/client';
import { UI } from '../../lib'; // Import your components here

const App = () => (
  <div>
    <UI.Layouts.Pages.Home />
    <UI.Buttons.Submit>
      Submit
    </UI.Buttons.Submit>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);