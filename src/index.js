<<<<<<< HEAD
import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

const root = createRoot(document.getElementById("root"));
root.render(
=======
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
>>>>>>> 713b6fe66fec97a92af6869964a966e5673cceeb
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
<<<<<<< HEAD
  </React.StrictMode>
=======
  </React.StrictMode>,
  document.getElementById('root'),
>>>>>>> 713b6fe66fec97a92af6869964a966e5673cceeb
);
