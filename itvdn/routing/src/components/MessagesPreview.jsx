import React from 'react';
import createReactClass from 'create-react-class';

const MessagesPreview = createReactClass({
    render() {
        const { title, senderName, onClick} = this.props;
        return (
            <div className="messages-preview" onClick={onClick}>
                <div className="title-message">
                    {title}
                </div>
                <div className="from">
                    {`From: ${senderName}`}
                </div>
            </div>
        );
    },
});

export default MessagesPreview;
