import React from 'react';
import createReactClass from 'create-react-class';

import messages from '../messages.json';

import MessagesPreview from './MessagesPreview.jsx'

import './style/Inbox.less';

const Inbox = createReactClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState(){
        return {
            messages
        }
    },
    handelPreview(messageId){
        this.context.router.push(`inbox/message/${messageId}`);
    },
    render() {
        const { messages } = this.state;
        return (
            <div className="inbox-app">
                <div className="list-messages">
                    {
                        messages.map(message =>
                            <MessagesPreview key={message.id} title={message.subject} senderName={message.senderName} onClick={this.handelPreview.bind(null, message.id)}/>
                                    )
                    }
                </div>
                <div className="message-container">
                    {this.props.children}
                </div>
            </div>
        );
    },
});

export default Inbox;
