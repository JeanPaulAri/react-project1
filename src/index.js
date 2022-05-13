import React from 'react';
//import ReactDOM from 'react-dom';
import {createRoot} from "react-dom/client";
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

function Tick({ name }){
    return(<div>
        <h1>Hola {name}</h1>
        <h2>Actualmente son las : {new Date().toLocaleTimeString()}.</h2>
    </div>);
}
const root= createRoot(document.getElementById('root'));

root.render(
    <Tick name="Usuario"/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
