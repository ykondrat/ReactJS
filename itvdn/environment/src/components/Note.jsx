import React from 'react';
import createReactClass from 'create-react-class';
import './style/Note.css';

const Note = createReactClass({
    render() {
        let style = { backgroundColor: this.props.color };
        console.log(this.props.color);
        return (
            <div className="note" style={style}>
                <span className="delete-note" onClick={this.props.onDelete}> × </span>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Note;
