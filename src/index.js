import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './styles/styles.css';
import Header from './components/shared/Header';
import HomePage from './components/home/HomePage';
import PortfolioPage from './components/portfolio/PortfolioPage';
import TransactionPage from './components/transactions/TransactionPage';
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
                <Route path="/transaction" component={TransactionPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
            </div>
        </BrowserRouter>
    </div>
);


render(<App/>, document.getElementById('app'));
