import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import App2 from './components/App.jsx';
//import { HashRouter,Route } from 'react-router';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <div>
            <Route exact={true} path='/' component={App}>
            </Route>
            <Route path='/hello' component={App2}>
            </Route>
        </div>
    </Router>,
    document.getElementById('content')
);
