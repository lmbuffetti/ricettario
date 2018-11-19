/* eslint "object-shorthand":0 */
import React, { Component, Fragment } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { change } from 'redux-form';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { localId } from '../actions/CommonActions';

import api from '../api/config';

class UploadAssetsStatement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: [],
        };

        this.renderFilesList = this.renderFilesList.bind(this);
        this.deleteFile = this.deleteFile.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
    }

    uploadFiles(files) {
        const {
            input,
            planUUID,
        } = this.props;
        const {
            loading,
        } = this.state;
        const filesToUpload = input.value || [];
        const startNum = filesToUpload.length;
        files.map((file, i) => {
            // Initial FormData
            const self = this;
            const formData = new FormData();
            formData.append('file', file);
            const numEl = startNum + i;
            filesToUpload[numEl] = file;
            const loadingFlie = loading;
            /* eslint func-names: ["error", "never"] */
            const headerUpload = {
                onUploadProgress: function (progressEvent) {
                    loadingFlie[i] = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    self.setState({ loading: loadingFlie });
                },
            };
            api.plan.uploadFilesAsset(
                planUUID,
                formData,
                headerUpload,
            ).then((response) => {
                filesToUpload[i].planDocumentUuids = response.data.plan_document_uuids[0];
                input.onChange(filesToUpload);
                self.forceUpdate();
            });
            return null;
        });
    }

    deleteFile(i, e) {
        e.preventDefault();
        const {
            input,
        } = this.props;
        const {
            loading,
        } = this.state;
        const filesToUpload = input.value || [];
        const loadingFlie = loading;
        filesToUpload.splice(i, 1);
        input.onChange(filesToUpload);
        loadingFlie[i] = 100;
        this.setState({ loading: loadingFlie });
    }

    renderFilesList() {
        const {
            input,
        } = this.props;
        const {
            loading,
        } = this.state;
        const files = input.value || [];
        return (
            <ul className="staementList">
                {
                    files.map((item, i) => {
                        let size;
                        switch (true) {
                            case item.size > 1000000:
                                size = `${(item.size / 1000000).toFixed(2)} MB`;
                                break;
                            case item.size > 1000:
                                size = `${(item.size / 1000).toFixed(2)} KB`;
                                break;
                            default:
                                size = `${(item.size).toFixed(2)} Bytes`;
                        }
                        return (
                            <li key={i.toString()}>
                                <p>{`${item.name} (${size})`}</p>
                                <div className="loadingBarStatement">
                                    <span style={{ width: `${loading[i]}%` }} />
                                </div>
                                <button type="button" className="deleteImage" onClick={this.deleteFile.bind(this, i)}>
                                    <img src="/static/img/close.svg" alt="remove element" />
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    render() {
        const {
            extraClasses,
            input,
            disabled,
        } = this.props;
        return (
            <div className={extraClasses}>
                {this.renderFilesList()}
                <Dropzone
                    accept="image/jpeg, image/pjpeg, image/png, application/pdf"
                    className="wrap-dropzone"
                    name={input.name}
                    onDrop={this.uploadFiles}
                    maxSize={100000000}
                    disabled={disabled}
                >
                    {
                        disabled
                            ? (
                                <p className="greyText">Please fill the field before uplaod your fiels</p>
                            )
                            : (
                                <Fragment>
                                    <p className="greyText">
                                        Drop documents here or click to
                                        <span className="color-p cursor-p"> upload files</span>
                                    </p>
                                    <p className="small_text">Individual file upload limit 100MB</p>
                                </Fragment>
                            )

                    }
                </Dropzone>
            </div>
        );
    }
}

UploadAssetsStatement.propTypes = {
    extraClasses: PropTypes.string,
    input: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    planUUID: PropTypes.string,
};

UploadAssetsStatement.defaultProps = {
    extraClasses: 'span-8 no-padding mb-small',
    disabled: false,
    planUUID: null,
};

const mapStateToProps = state => ({
    planUUID: get(state, 'plan.plan_uuid', null),
});

const mapDispatchToProps = dispatch => ({
    changeFieldValue: (formName, field, value) => {
        dispatch(change(formName, field, value));
    },
    handleSetPlanId: bindActionCreators(localId, dispatch),
});

// noinspection JSUnusedGlobalSymbols
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadAssetsStatement));
