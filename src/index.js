import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the main App component
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports'; // AWS Amplify configuration

// Configure Amplify
Amplify.configure(awsconfig);

// Render the App into the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Make sure this matches the id in index.html
);
