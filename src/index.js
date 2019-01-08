import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './style/index.scss';

ReactDOM.render(
<BrowserRouter basename={process.env.PUBLIC_URL}><App /></BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
