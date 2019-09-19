import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer/rootReducer';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

