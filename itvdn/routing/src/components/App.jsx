import React from 'react';
import createReactClass from 'create-react-class';
import { Link } from 'react-router';

import './style/App.less';

const App = createReactClass({
    render() {
        return (
            <div className="app">
                <h1>App router</h1>
                <div className="menu-bar">
                    <div className="menu-item">
                        <Link to='/about'>About</Link>
                    </div>
                    <div className="menu-item">
                        <Link to='/inbox'>Inbox</Link>
                    </div>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    },
});

export default App;
