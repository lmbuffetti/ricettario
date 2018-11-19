import React from 'react';
import PropTypes from 'prop-types';

export const BackNextButtons = ({
    isActiveBack, isActiveNext, onClickNext, onClickBack, backText, nextText, buttonClass, extraClass,
}) => (
    <section className="back-next-buttons">
        <section className="top-shadow" />
        <section className="main-block container">
            <div className={`dis-f jc-sb ai-c ${extraClass}`}>
                <div
                    id="back"
                    role="presentation"
                    className={`back-button color-brand-purple cur-p dis-f ai-c ${isActiveBack ? '' : 'disabled'}`}
                    onClick={onClickBack}
                >
                    {backText}
                </div>
                <div
                    id="next"
                    role="presentation"
                    // eslint-disable-next-line max-len
                    className={`cur-p dis-f ai-c jc-c btn ${buttonClass} btn-navigate ${isActiveNext ? '' : 'disabled'}`}
                    onClick={onClickNext}
                >
                    {nextText}
                </div>
            </div>
        </section>
    </section>
);

BackNextButtons.propTypes = {
    isActiveBack: PropTypes.bool,
    isActiveNext: PropTypes.bool,
    onClickNext: PropTypes.func,
    onClickBack: PropTypes.func,
    backText: PropTypes.string,
    nextText: PropTypes.string,
    buttonClass: PropTypes.string,
    extraClass: PropTypes.string,
};

BackNextButtons.defaultProps = {
    isActiveBack: true,
    isActiveNext: true,
    onClickBack: null,
    onClickNext: null,
    extraClass: '',
    backText: 'Back',
    nextText: 'Next',
    buttonClass: 'btn-green',
};
