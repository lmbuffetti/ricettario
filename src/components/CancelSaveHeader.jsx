import React from 'react';
import PropTypes from 'prop-types';

export const CancelSaveHeader = ({
    isActiveCancel, isActiveSave, onClickCancel, onClickSave, title,
}) => (
    <section className="cancel-save-header">
        <section className="main-block container dis-f jc-sb ai-c">
            {onClickSave
            && (
                <div
                    role="presentation"
                    // eslint-disable-next-line max-len
                    className={`dis-f ai-c jc-c fw-n btn btn-border btn-border-purple btn-navigate cur-p ${isActiveCancel ? '' : 'disabled'}`}
                    onClick={onClickCancel}
                >
                Cancel
                </div>
            )
            }
            <div className={`title fw-n ${!onClickCancel && 'fw-f ta-c'}`}>
                {title}
            </div>
            {onClickCancel
            && (
                <div
                    role="presentation"
                    // eslint-disable-next-line max-len
                    className={`dis-f ai-c jc-c fw-n cur-p btn btn-green btn-navigate ${isActiveSave ? '' : 'disabled'}`}
                    onClick={onClickSave}
                >
                Save
                </div>
            )
            }
        </section>
        <section className="bottom-shadow" />
    </section>
);

CancelSaveHeader.propTypes = {
    isActiveCancel: PropTypes.bool,
    isActiveSave: PropTypes.bool,
    onClickSave: PropTypes.func,
    onClickCancel: PropTypes.func,
    title: PropTypes.string.isRequired,
};

CancelSaveHeader.defaultProps = {
    isActiveCancel: true,
    isActiveSave: true,
    onClickCancel: null,
    onClickSave: null,
};
