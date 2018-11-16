import React from 'react';
import { render} from 'react-dom';

import '@babel/polyfill';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css'

render(<App />, document.getElementById("root"));