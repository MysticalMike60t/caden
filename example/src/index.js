import React from 'react';
import ReactDOM from 'react-dom/client';
import { Buttons, Layout } from '../../lib'; // Import your components here

const App = () => (
  <div>
    <Layout.Page.Home />
    <Buttons.Submit />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
