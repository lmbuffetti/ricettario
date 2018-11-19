import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import InputCustom from './InputCustom';
import { required } from '../utils/validation.helper';

/**
 * Render the content for user idle. Dumb component
 *
 */
class ModalForm extends Component {
    constructor(props) {
        super(props);

        this.stopPropagation = this.stopPropagation.bind(this);
    }

    stopPropagation = (e) => {
        e.stopPropagation();
    };

    render() {
        const {
            visible,
            modalTitle,
            nameFirst,
            nameSecond,
            labelFirst,
            labelSecond,
            placeholderFirst,
            placeholderSecond,
            isSubmitted,
            handleNext,
            onBlurClick,
            buttonDisabled,
            closeButton,
        } = this.props;

        return (visible && (
            <div className="modal-form" onClick={onBlurClick} onKeyUp={onBlurClick} role="presentation">
                <div className="modal-form-body" onClick={this.stopPropagation} onKeyUp={this.stopPropagation} role="presentation">
                    <div className="mb-small dis-f jc-sb ai-c">
                        {modalTitle
                            && (
                                <h5>
                                    {modalTitle}
                                </h5>
                            )}
                        {closeButton
                            && (
                                <button type="button" className="deleteImage btn_clear" onClick={onBlurClick}>
                                    <img src="/static/img/close.svg" alt="close window" style={{ width: '25px' }} />
                                </button>
                            )}
                    </div>
                    <div className="hr mb-small" />
                    <div className="modal-form-inputs">
                        <Field
                            component={InputCustom}
                            name={nameFirst}
                            label={labelFirst}
                            placeholder={placeholderFirst}
                            extraClasses="col span-3"
                            isShowErrors={isSubmitted}
                            validate={[
                                required,
                            ]}
                        />
                        <Field
                            component={InputCustom}
                            name={nameSecond}
                            label={labelSecond}
                            placeholder={placeholderSecond}
                            extraClasses="col col-last span-3"
                            isShowErrors={isSubmitted}
                            validate={[
                                required,
                            ]}
                        />
                    </div>
                    <div className="modal-form-action">
                        <button
                            type="button"
                            className="btn"
                            onClick={handleNext}
                            disabled={buttonDisabled}
                        >
                                Next
                        </button>
                    </div>
                </div>
            </div>
        ));
    }
}

ModalForm.propTypes = {
    modalTitle: PropTypes.string,
    nameFirst: PropTypes.string,
    labelFirst: PropTypes.string,
    placeholderFirst: PropTypes.string,
    nameSecond: PropTypes.string,
    labelSecond: PropTypes.string,
    placeholderSecond: PropTypes.string,
    visible: PropTypes.bool,
    closeButton: PropTypes.bool,
    handleNext: PropTypes.func.isRequired,
    onBlurClick: PropTypes.func,
    isSubmitted: PropTypes.bool,
    buttonDisabled: PropTypes.bool,
};

ModalForm.defaultProps = {
    modalTitle: '',
    nameFirst: '',
    labelFirst: '',
    placeholderFirst: '',
    nameSecond: '',
    labelSecond: '',
    placeholderSecond: '',
    visible: false,
    closeButton: false,
    isSubmitted: false,
    buttonDisabled: false,
    onBlurClick: null,
};

export default ModalForm;
