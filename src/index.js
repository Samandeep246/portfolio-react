import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Remove default dark from HTML; we'll handle dark mode in App state
// document.documentElement.classList.add("dark"); // No need to force here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* BackgroundPattern rendered OUTSIDE App */}
   
    <App />
  </React.StrictMode>
);

// Performance measuring (optional)
reportWebVitals();
