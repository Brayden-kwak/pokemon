import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './fonts/indigo/Indigo-Regular.otf';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
