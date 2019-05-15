import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import 'animate.css/animate.css';
import App from './Components/App';
import 'jquery/dist/jquery';
import * as serviceWorker from './Components/serviceWorker';
import './JS/script';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
