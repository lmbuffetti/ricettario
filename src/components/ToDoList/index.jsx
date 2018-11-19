import React, { Component } from 'react';
import axios from 'axios/index';
import TextareaAutosize from 'react-autosize-textarea';
import PropTypes from 'prop-types';
import { change } from 'redux-form';
import { withRouter } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';

function autosize() {
    const el = this;
    setTimeout(() => {
        el.style.cssText = 'height:auto; padding:0';
        el.style.cssText = `height:${el.scrollHeight + 10}px`;
    }, 0);
}

class ToDoList extends Component {
    constructor(props) {
        super(props);
        const {
            data,
            globaldata,
            arrayId,
        } = this.props;
        const num = (data !== null) ? data[arrayId].notes.length : globaldata.length;
        this.state = {
            curAllData: (data !== null) ? data : globaldata,
            curNote: [],
            [`note${arrayId}`]: '',
            [`note${arrayId}${num}`]: '',
            [`note${arrayId}${0}`]: '',
        };

        this.changeNote = this.changeNote.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveData = this.saveData.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }

    componentDidMount() {
        const {
            data,
            globaldata,
            arrayId,
        } = this.props;

        this.setState({
            curNote: (data !== null) ? data[arrayId].notes.slice() : globaldata.slice(),
        });
    }

    changeNote(curArrayId, subArrayId, e) {
        const {
            curAllData,
        } = this.state;
        const {
            data,
            arrayId,
        } = this.props;
        const self = this;
        let name;
        let value;
        if (typeof e.name !== 'undefined') {
            ({
                name, value,
            } = e);
        } else if (typeof e.target !== 'undefined') {
            ({
                name, value,
            } = e.target);
        } else {
            name = Object.keys(self.refs)[0];
        }
        const arrayNote = curAllData;
        if (data !== null) {
            if (typeof arrayNote[curArrayId].notes[subArrayId] !== 'undefined') {
                arrayNote[curArrayId].notes[subArrayId] = { text: value, done: '0' };
            } else {
                arrayNote[curArrayId].notes[subArrayId] = { text: value, done: '0' };
            }
            this.setState({
                [`note${arrayId}${arrayNote[curArrayId].notes.length}`]: '',
            });
        } else {
            arrayNote[subArrayId] = { text: value, done: '0' };
            let id;
            if (typeof arrayNote[curArrayId].notes !== 'undefined') {
                id = curArrayId;
            } else {
                id = arrayNote.length;
            }
            this.setState({
                [`note${arrayId}${id}`]: value,
            });
        }
        if (name.indexOf('curNote') === -1) {
            this.setState({
                [name]: value,
            });
        }
        document.getElementById(name).addEventListener('keydown', autosize);
    }

    handleChange(id, subArrayId) {
        const {
            curAllData,
            curNote,
        } = this.state;
        const {
            data,
            arrayId,
            saveNote,
        } = this.props;
        const arrayNote = curAllData;
        let type;
        let gdataArrayId;
        const curArrayId = id || arrayId;
        const note = curNote;
        if (data !== null) {
            if (typeof arrayNote[curArrayId].notes[subArrayId] !== 'undefined') {
                arrayNote[curArrayId].notes[subArrayId].text = arrayNote[curArrayId].notes[subArrayId].text.replace(/\r?\n/g, '<br>');
                note[subArrayId] = arrayNote[curArrayId].notes[subArrayId];
                type = 'slide';
                gdataArrayId = curArrayId + 1;
                this.setState({
                    curNote: note,
                    [`note${arrayId}${note.length}`]: '',
                });
            }
        }
        if (data === null) {
            if (typeof arrayNote[subArrayId] !== 'undefined') {
                type = 'general';
                arrayNote[subArrayId].text = arrayNote[subArrayId].text.replace(/\r?\n/g, '<br>');
                note[subArrayId] = arrayNote[subArrayId];
                gdataArrayId = 0;
                this.setState({
                    curNote: note,
                    [`note${arrayId}${note.length}`]: '',
                });
            }
        }
        const dataToSave = {
            type,
            arrayId: gdataArrayId,
            val: note,
        };
        saveNote(dataToSave);
    }

    saveData(e) {
        const {
            data,
            arrayId,
            gsheet,
        } = this.props;
        const {
            accessToken,
            curNote,
        } = this.state;
        e.preventDefault();
        const googleRow = (data !== null) ? arrayId + 2 : 1;
        const urlSheet = '/google';
        const formDataSheet = new FormData();
        formDataSheet.append('idGoogleSheet', gsheet);
        formDataSheet.append('access_token', accessToken);
        formDataSheet.append('notes', JSON.stringify(curNote));
        formDataSheet.append('row', googleRow);
        formDataSheet.append('action', 'saveNote');
        axios.post(urlSheet, formDataSheet);
    }

    removeNote(curArrayId) {
        const {
            data,
            arrayId,
            saveNote,
        } = this.props;
        const {
            curNote,
        } = this.state;
        const note = curNote; let gdataArrayId; let
            type;
        note.splice(curArrayId, 1);
        if (data === null) {
            gdataArrayId = 0;
            type = 'general';
        } else {
            gdataArrayId = arrayId + 1;
            type = 'slide';
        }
        const dataToSave = {
            type,
            arrayId: gdataArrayId,
            val: note,
        };
        saveNote(dataToSave);
    }

    render() {
        const self = this;
        const {
            data,
            arrayId,
        } = this.props;
        const {
            curNote,
            curAllData,
        } = this.state;
        const {
            removeNote,
            handleChange,
            changeNote,
        } = this;
        return (
            <div className="toDoList">
                {
                    curNote.map((item, i) => (
                        <div key={i.toString()} className="listItem">
                            <TextareaAutosize
                                className={(data !== null) ? `done_${curAllData[arrayId].notes[i].done}` : `done_${curAllData[i].done}`}
                                value={(data !== null) ? curAllData[arrayId].notes[i].text.replace(/<br\s*[/]?>/gi, '\n') : curAllData[i].text.replace(/<br\s*[/]?>/gi, '\n')}
                                onChange={changeNote.bind(this, arrayId, i)}
                                onBlur={handleChange.bind(this, arrayId, i)}
                                name={`curNote${arrayId + i}`}
                                id={`curNote${arrayId + i}`}
                            />
                            <button
                                type="button"
                                onClick={removeNote.bind(this, i)}
                            >
X
                            </button>
                        </div>
                    ))
                }
                <TextareaAutosize
                    value={self.state[`note${arrayId}${curNote.length}`]}
                    name={`note${arrayId}${curNote.length}`}
                    onChange={changeNote.bind(this, arrayId, curNote.length)}
                    onBlur={handleChange.bind(this, arrayId, curNote.length)}
                    id={`note${arrayId}${curNote.length}`}
                />
                <button type="button" className="btn primary_button">Add New Note</button>
            </div>
        );
    }
}

ToDoList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.any),
    arrayId: PropTypes.number,
    globaldata: PropTypes.arrayOf(PropTypes.any),
    gsheet: PropTypes.string,
    saveNote: PropTypes.func,
};

ToDoList.defaultProps = {
    saveNote: () => {},
    data: null,
    arrayId: 0,
    globaldata: null,
    gsheet: '',
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
    changeFieldValue: (field, value) => {
        dispatch(change('addISA', field, value));
    },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ToDoList));
