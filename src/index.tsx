import React from "react";
import {App} from "app/App";
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';

const root = (
    <App />
)

ReactDOM.render(
    root,
    document.getElementById('root')
);