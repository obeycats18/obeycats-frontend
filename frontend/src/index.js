import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/core/App';
import {BrowserRouter} from 'react-router-dom'

import './index.scss';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ), document.getElementById('root'));