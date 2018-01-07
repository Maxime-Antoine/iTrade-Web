import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/shared/Header';
import HomePage from './components/home/HomePage';
import PortfolioPage from './components/portfolio/PortfolioPage';
import AboutPage from './components/about/AboutPage';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/register/RegisterPage';


const App = () => (
    <div className="container-fluid">
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={HomePage} />
                <Route path="/portfolio" component={PortfolioPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
            </div>
        </BrowserRouter>
    </div>
);


render(<App/>, document.getElementById('app'));
