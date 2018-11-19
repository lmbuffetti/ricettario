import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

class UploadImage extends Component {
    render() {
        const {
            extraClasses,
        } = this.props;
        return (
            <div className={`form-inline ${extraClasses}`}>
                <Dropzone
                    className="wrap-dropzone"
                >
                    <p className="greyText">Drop documents here or click to upload</p>
                    <button
                        className="btn small btn-border-purple"
                        type="button"
                    >
                        Choose files
                    </button>
                </Dropzone>

            </div>
        );
    }
}

UploadImage.propTypes = {
    extraClasses: PropTypes.string,
};

UploadImage.defaultProps = {
    extraClasses: '',
};

export default UploadImage;
