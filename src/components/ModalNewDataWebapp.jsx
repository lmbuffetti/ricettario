import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
// import { setRequestWebapp } from '../actions/CommonActions';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';
import { savePlan } from '../actions/WebappActions';


class ModalNewDataWebapp extends Component {
    constructor(props) {
        super(props);

        this.renderAction = this.renderAction.bind(this);
        this.loginAction = this.loginAction.bind(this);
        this.handleData = this.handleData.bind(this);
        this.hanldeReload = this.hanldeReload.bind(this);
    }

    loginAction = () => {
        localStorage.setItem('token', '');
        window.location.href = '/webapp/login';
    };

    handleData() {
        const { handlePatchPlan, gData, idGoogle } = this.props;
        const payload = {
            gData, idGoogle, arrayNum: 0, save_type: 'save', type: 'login',
        };
        handlePatchPlan(payload);
    }

    hanldeReload() {
        const { location } = this.props;
        location.reload();
    }

    renderAction() {
        const {
            type, link,
        } = this.props;
        const {
            handleData, hanldeReload,
        } = this;
        if (type === 'login') {
            return (
                <div className="button_action">
                    <button type="button" onClick={this.loginAction} className="primary_button">
                        LOGIN
                    </button>
                    <button type="button" onClick={handleData.bind('login')} className="alert_button">
                        SAVE & LOGIN
                    </button>
                </div>
            );
        } if (type === 'wrong_plan') {
            return (
                <div className="button_action">
                    <a href={link} className="primary_button">
                        GO TO GOOGLE SHEET
                    </a>
                </div>
            );
        }

        return (
            <div className="button_action">
                <button type="button" onClick={hanldeReload} className="primary_button">
                    RELOAD
                </button>
                <button type="button" onClick={handleData} className="alert_button">
                    SAVE & RELOAD
                </button>
            </div>
        );
    }

    renderPopup() {
        const { newDataFromProps, title, text } = this.props;

        if (newDataFromProps) {
            return (
                <div id="wrap_user_change">
                    <div id="user_change">
                        <h4>
                            {title}
                        </h4>
                        <p dangerouslySetInnerHTML={{ __html: text }} />
                        {this.renderAction()}
                    </div>
                </div>
            );
        }
        return null;
    }

    render() {
        return (
            <Fragment>
                {this.renderPopup()}
            </Fragment>
        );
    }
}


ModalNewDataWebapp.propTypes = {
    newDataFromProps: PropTypes.bool,
    gData: PropTypes.arrayOf(PropTypes.array),
    idGoogle: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    link: PropTypes.string,
    location: PropTypes.object.isRequired,
    handlePatchPlan: PropTypes.func.isRequired,
};
ModalNewDataWebapp.defaultProps = {
    title: '',
    idGoogle: null,
    text: '',
    type: '',
    link: '',
    gData: [],
    newDataFromProps: false,
};

const mapStateToProps = (state, props) => ({
    ...state,
    gData: get(state, 'webapp.slidePresentation.gData', []),
    idGoogle: get(props, 'match.params.name', null),
});

const mapDispatchToProps = dispatch => ({
    handlePatchPlan: bindActionCreators(savePlan, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalNewDataWebapp));
