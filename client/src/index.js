import React from 'react';
import ReactDOM from 'react-dom/client';
import './animation.css';
import './disco.css';
import './Eanimation.css';
import './Edisco.css';
import './episodescss.css';
import './style.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

