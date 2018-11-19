import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-autosize-textarea';

class TextareaSoftFacts extends Component {
    render() {
        const {
            input, extraClasses, placeholder, fieldName,
        } = this.props;
        return (
            <TextareaAutosize
                {...input}
                id={input.name}
                className={`${extraClasses}`}
                placeholder={placeholder}
                name={fieldName}
            />
        );
    }
}

TextareaSoftFacts.propTypes = {
    input: PropTypes.object.isRequired,
    extraClasses: PropTypes.string,
    fieldName: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
};

TextareaSoftFacts.defaultProps = {
    extraClasses: '',
    label: '',
    fieldName: '',
    placeholder: '',
};


export default TextareaSoftFacts;
