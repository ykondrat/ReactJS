import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import About from './components/About.jsx';
import Inbox from './components/Inbox.jsx';
import Message from './components/Message.jsx';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path='/about' component={About}/>
            <Route path='/inbox' component={Inbox}>
                <Route path='/inbox/message/:messageId' component={Message} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('content')
);
