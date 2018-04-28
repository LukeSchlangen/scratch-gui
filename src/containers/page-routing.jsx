import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Home from '../pages/Home.jsx';
import Code from '../pages/Code.jsx';
import Register from '../pages/Register.jsx';

const PageRouting = () => (
    <Router>
        <span>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/code">Code</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
            <Switch>
                <Route
                    exact
                    component={Home}
                    path="/"
                />
                <Route
                    component={Code}
                    path="/code"
                />
                <Route
                    component={Register}
                    path="/register"
                />
            </Switch>
        </span>
    </Router>
);

export default PageRouting;
