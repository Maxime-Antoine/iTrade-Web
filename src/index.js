import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/shared/Header';


const App = () => (
    <div className="container-fluid">
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </div>
        </BrowserRouter>
    </div>
);


render(<App/>, document.getElementById('app'));
