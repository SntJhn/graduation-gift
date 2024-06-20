import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// function HellowWorld() {
//   return <h1 className='greeting'>Hello, world!</h1>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);