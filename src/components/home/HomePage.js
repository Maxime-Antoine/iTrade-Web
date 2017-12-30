import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Hello World!</h1>
                <p>This is the home page</p>
                <Link to="about" className="btn btn-primary btn-lg">About</Link>
            </div>
        );
    }
}

export default HomePage;
