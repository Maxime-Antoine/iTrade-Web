import React from 'react';
import './login-page.css';

class LoginPage extends React.Component {
    render(){
        return(
            <div id="login-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="login-input">Email</label>
                        <input type="email" className="form-control" id="login-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-input">Password</label>
                        <input type="password" className="form-control" id="password-input" />
                    </div>
                    <button type="button" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;
