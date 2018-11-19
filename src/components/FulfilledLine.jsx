import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FulfilledLine extends Component {
    render() {
        const { lineColor, loadingPercent } = this.props;
        const sectionStyle = {
            backgroundColor: `${lineColor}`,
            width: `${loadingPercent}vw`,
        };

        return (
            <section className="fulfilled-line" style={sectionStyle} />
        );
    }
}

FulfilledLine.propTypes = {
    loadingPercent: PropTypes.number.isRequired,
    lineColor: PropTypes.string,
};

FulfilledLine.defaultProps = {
    lineColor: 'green',
};

export default FulfilledLine;
