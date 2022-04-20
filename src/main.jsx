import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from "./App"

// import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "/node_modules/primeflex/primeflex.css"; // Primeflex for utility CSS classes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
