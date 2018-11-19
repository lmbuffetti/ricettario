import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddDashedButton extends Component {
    render() {
        const {
            extraClasses,
            name,
            addName,
            handleRedirect,
            hintMessage,
        } = this.props;
        return (
            <section className={extraClasses}>
                <div className="input-label">
                    {name}
                </div>
                {hintMessage && (
                    <div className="hint hint-dashed-button">
                        {hintMessage}
                    </div>
                )}
                <button
                    type="button"
                    className="w-100 btn-border no_border"
                    onClick={handleRedirect}
                >
                    <div className="add-button fw-n">
                        {addName}
                    </div>
                </button>
            </section>
        );
    }
}

AddDashedButton.propTypes = {
    name: PropTypes.string,
    addName: PropTypes.string,
    hintMessage: PropTypes.string,
    extraClasses: PropTypes.string,
    handleRedirect: PropTypes.func,
};
AddDashedButton.defaultProps = {
    name: '',
    addName: '',
    extraClasses: 'col-last span-8',
    handleRedirect: null,
    hintMessage: null,
};

export default AddDashedButton;
