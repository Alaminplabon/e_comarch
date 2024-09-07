import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Import MDB CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);