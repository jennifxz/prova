import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SitesRouter from './sitesRouter.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SitesRouter />
  </React.StrictMode>
);