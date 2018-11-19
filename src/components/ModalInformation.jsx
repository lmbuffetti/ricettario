import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalInformation extends Component {
    render() {
        const {
            title,
            text,
        } = this.props;
        return (
            <section className="ModalInformationIcon">
                <h6>
                    {title}
                </h6>
                <p>
                    {text}
                </p>
            </section>
        );
    }
}


ModalInformation.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
};

ModalInformation.defaultProps = {
    title: '',
    text: '',
};

export default ModalInformation;
