import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import './index.css'

//aca se usa todo lo de App.jsx
const rootElement = document.querySelector('#root');


const root = ReactDOM.createRoot(rootElement); 
root.render(
<App/   >
)