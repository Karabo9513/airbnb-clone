import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store'; // Import the Redux store
import App from './App';

// Create a root element using React's createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React application
root.render(
  <React.StrictMode>
    {/* Wrap the App component with the Provider component */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
