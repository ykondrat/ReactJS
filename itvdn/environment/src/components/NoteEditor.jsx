import React from 'react';
import createReactClass from 'create-react-class';
import './style/NoteEditor.css';

const NoteEditor = createReactClass({
    getInitialState() {
        return {
            text: '',
            color: '#F2F95C'
        };
    },
    handleTextChange(event) {
        this.setState({ text: event.target.value });
    },
    handleNoteAdd() {
        let newNote = {
            text: this.state.text,
            color: this.state.color,
            id: Date.now()
        };
        if (this.state.text.trim()) {
            this.props.onNoteAdd(newNote);
            this.setState({ text: '' });
            let div = document.querySelectorAll('.color-picker div');
            div.forEach((elem) => {
                elem.style = 'border: none';
            });
            this.setState({ color: '#F2F95C' });
        }
    },
    handleColor(event) {
        let div = document.querySelectorAll('.color-picker div');
        div.forEach((elem) => {
            elem.style = 'border: none';
        });
        event.target.style = 'border: 1px solid black';
        if (event.target.classList.value == 'yellow') {
            this.setState({ color: '#F2F95C' });
        } else if (event.target.classList.value == 'red') {
            this.setState({ color: '#F9705C' });
        } else if (event.target.classList.value == 'green') {
            this.setState({ color: '#8FF95C' });
        } else {
            this.setState({ color: '#5CCFF9' });
        }
    },
    render() {
        return (
            <div className="note-editor">
                <textarea
                    placeholder="Enter your note here..."
                    rows={5}
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className="color-picker">
                    <div className="yellow" onClick={this.handleColor}>
                    </div>
                    <div className="red" onClick={this.handleColor}>
                    </div>
                    <div className="green" onClick={this.handleColor}>
                    </div>
                    <div className="blue" onClick={this.handleColor}>
                    </div>
                </div>
                <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
            </div>
        );
    }
});

module.exports = NoteEditor;
