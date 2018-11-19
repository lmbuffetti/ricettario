import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Preload extends Component {
    render() {
        const { createPresentation } = this.props;

        return (
            <div id="loading">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <img src="/static/img/logo.png" alt="Loading" />
                        <div className="object" />
                        <div className="object" />
                        <div className="object" />
                        <div className="object" />
                        <div className="object" />
                        <div className="object" />
                        <div className="object" />
                        <div className="object" />
                        <div className="object" />
                        <div className="object" />
                        {createPresentation
                        && (
                            <h4>
                                Creating presentation,
                                <br />
                                please wait..
                            </h4>
                        )
                        }
                    </div>
                </div>

            </div>
        );
    }
}

Preload.propTypes = {
    createPresentation: PropTypes.bool,
};

Preload.defaultProps = {
    createPresentation: false,
};

export default Preload;
