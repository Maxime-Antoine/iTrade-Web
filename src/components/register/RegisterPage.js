import React from 'react';
import {Link} from 'react-router-dom';
import './register-page.css';

class RegisterPage extends React.Component {
    render(){
        return(
            <div id="register-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="email-input">Email</label>
                        <input type="text" className="form-control" id="email-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-input">Password</label>
                        <input type="password" className="form-control" id="password-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password-input">Confirm password</label>
                        <input type="password" className="form-control" id="confirm-password-input" />
                    </div>
                    <button type="button" className="btn btn-primary">Register</button>
                </form>
                <br />
                <p>Already have an account ? <Link to="/login">Login !</Link></p>
            </div>
        );
    }
}

export default RegisterPage;
