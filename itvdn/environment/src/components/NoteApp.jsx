import React from 'react';
import createReactClass from 'create-react-class';
import NoteEditor from './NoteEditor.jsx';
import NoteGrid from './NoteGrid.jsx';

const NoteApp = createReactClass({
    getInitialState() {
        return {
            notes: []
        };
    },
    componentDidMount() {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({ notes: localNotes });
        }
    },
    componentDidUpdate() {
        this._updateLocalStorage();
    },
    handleNoteDelete(note) {
        var noteId = note.id;
        var newNotes = this.state.notes.filter(function(note) {
            return note.id !== noteId;
        });
        this.setState({ notes: newNotes });
    },
    handleNoteAdd(newNote) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    },
    render() {
        return (
            <div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NoteGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
            </div>
        );
    },
    _updateLocalStorage() {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
});

module.exports = NoteApp;
