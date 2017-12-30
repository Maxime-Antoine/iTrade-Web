import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

render((
    <div className="container-fluid">
        <p>Header here</p>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={AboutPage} />
            </div>
        </BrowserRouter>
    </div>
), document.getElementById('app'));
