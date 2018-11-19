import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import get from 'lodash/get';
import jsonp from 'jsonp';
import { firstSaveWebapp, loadPlanWebapp } from '../../actions/WebappActions';
import ModalWebApp from '../../components/ModalNewDataWebapp';
import { LoadableSpinner } from '../../components/Loadable';
import APIKeyGoogle from '../../helpers/constants';

class Layout extends Component {
    constructor(props) {
        super(props);
        const {
            handleGetMeeetingPlan,
            slidePresentation,
            history,
            idGoogle,
        } = this.props;
        this.state = {
            avisorPopup: false,
            lastChange: false,
            titleModal: '',
            textModal: '',
            type: '',
            adviserName: '',
            genderClient: '',
            genderPartner: '',
            connectiontime: new Date(),
            userUpdate: localStorage.getItem('name'),
        };

        this.savePresentation = this.savePresentation.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeState = this.changeState.bind(this);

        history.listen(() => {
            handleGetMeeetingPlan(idGoogle);
        });
        if (typeof slidePresentation.allDataDef === 'undefined') {
            handleGetMeeetingPlan(idGoogle);
        }
    }

    componentWillMount() {
        const self = this;
        const { history } = this.props;
        const { connectiontime, userUpdate } = this.state;
        const accessToken = localStorage.getItem('token');
        // const self = this;
        localStorage.setItem('connectiontime', new Date());
        const urlCurrent = `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`;
        axios.get(urlCurrent)
            .then((data) => {
                const expire = (data.data.expires_in - 60) * 1000;
                setTimeout(() => {
                    // eslint-disable-next-line max-len
                    const currentPath = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
                    if (currentPath !== 'presentation' && currentPath !== 'nav_presentation') {
                        self.setState({
                            lastChange: true,
                            titleModal: 'Your Access Token Expiring',
                            textModal: 'For security reasons your access token to the Google Sheet will expire in 60 seconds',
                            type: 'login',
                        });
                    }
                }, expire);
                const currentUser = `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${localStorage.getItem('token')}`;
                jsonp(currentUser, null, (err2, data2) => {
                    localStorage.setItem('name', data2.name);
                    localStorage.setItem('userId', data2.id);
                });
            })
            .catch(() => {
                history.push('/webapp/login');
            });
        setInterval(() => {
            const urlCheck = `https://www.googleapis.com/drive/v2/files/${self.props.match.params.name}?key=${APIKeyGoogle}&access_token=${localStorage.getItem('token')}`;
            jsonp(urlCheck, null, (err, data) => {
                const gsheetDate = new Date(data.modifiedDate);
                if (gsheetDate.getTime() >= connectiontime.getTime()) {
                    if (userUpdate !== data.lastModifyingUserName) {
                        self.setState({
                            titleModal: 'New Data Saved',
                            // eslint-disable-next-line max-len
                            textModal: `The users ${data.lastModifyingUserName} saved a new data, to upload with “user” changes, click “Reload”, to save last changes - with potential data overriding - and also load new data, click “Save & Reload”`,
                            lastChange: false,
                            userUpdate: data.lastModifyingUserName,
                            type: 'changedData',
                        });
                    }
                } else if (self.state.userUpdate !== '') {
                    self.setState({
                        lasChange: false, userUpdate: '',
                    });
                }
            });
        }, 300000);
    }

    componentDidUpdate() {
        const {
            allData,
            slidePresentation,
            idGoogle,
        } = this.props;
        const {
            avisorPopup, lastChange,
        } = this.state;
        const self = this;
        if (typeof allData.type !== 'undefined' && !avisorPopup) {
            if (allData.type === 'open_modal_new_presentation') {
                self.setState({ avisorPopup: true });
            }
        }
        if (typeof slidePresentation.error !== 'undefined' && lastChange === false) {
            if (slidePresentation.error) {
                self.setState({
                    titleModal: 'Columns Number Wrong',
                    textModal: 'The number of years in the Plans are different!<br />Please check Voyant and update he Google Sheet!',
                    lastChange: true,
                    type: 'wrong_plan',
                    link: `https://docs.google.com/spreadsheets/d/${idGoogle}`,
                });
            }
        }
    }

    changeState(state, val) {
        this.setState({
            [state]: val,
        });
    }

    savePresentation() {
        const { firstSave, allData, idGoogle } = this.props;
        const { adviserName, genderClient, genderPartner } = this.state;
        const validSubmit = adviserName && genderClient && genderPartner;
        const body = {};
        body.idGoogle = idGoogle;
        body.client = allData.client;
        body.partner = allData.partner;
        body.adviser = adviserName;
        body.data_to_load = allData.data_to_load;
        body.genderClient = genderClient;
        body.genderPartner = genderPartner;
        if (validSubmit) {
            firstSave(body);
        }
    }

    handleChange(e) {
        let name;
        let value;
        if (typeof e.name !== 'undefined') {
            ({
                name, value,
            } = e);
        } else if (typeof e.target !== 'undefined') {
            ({
                name, value,
            } = e.target);
        }
        this.setState({
            [name]: value,
        });
    }

    render() {
        const {
            children,
            isLoading,
            allData,
            classPage,
        } = this.props;

        const {
            adviserName,
            genderClient,
            genderPartner,
            avisorPopup,
            titleModal,
            textModal,
            lastChange,
            type,
            link,
        } = this.state;

        const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { allData }));
        const validSubmit = !adviserName || !genderClient || !genderPartner;
        return (
            <section className={classPage}>
                {typeof allData.presentation !== 'undefined' && childrenWithProps}
                <LoadableSpinner isLoading={isLoading > 0} />
                {
                    avisorPopup
                    && (
                        <div id="formNewAdviser">
                            <select
                                name="adviserName"
                                value={adviserName}
                                onChange={this.handleChange}
                            >
                                <option value="">Adviser</option>
                                <option value="Andrew">Andrew</option>
                                <option value="Joseph">Joseph</option>
                                <option value="Dan">Dan</option>
                            </select>
                            <div className="row rowFlex ai-c mt-small">
                                <div className="col-md-4">
                                    {allData.client}
                                </div>
                                <div className="col-md-8">
                                    <select
                                        name="genderClient"
                                        value={genderClient}
                                        onChange={this.handleChange}
                                    >
                                        <option value="">Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                            {
                                allData.partner && (
                                    <div className="row rowFlex ai-c mt-small">
                                        <div className="col-md-4">
                                            {allData.partner}
                                        </div>
                                        <div className="col-md-8">
                                            <select
                                                name="genderPartner"
                                                value={genderPartner}
                                                onChange={this.handleChange}
                                            >
                                                <option value="">Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                )
                            }
                            <button
                                type="button"
                                className="primary_button"
                                onClick={this.savePresentation}
                                disabled={validSubmit}
                            >
                            CREATE PRESENTATION
                            </button>
                        </div>
                    )
                }
                <ModalWebApp
                    title={titleModal}
                    text={textModal}
                    newDataFromProps={lastChange}
                    type={type}
                    dismiss={this.changeState.bind(this, 'lastChange', false)}
                    singleButton
                    link={link}
                    textBtn="aaa"
                />
            </section>
        );
    }
}

Layout.propTypes = {
    isLoading: PropTypes.number,
    children: PropTypes.object.isRequired,
    handleGetMeeetingPlan: PropTypes.func.isRequired,
    classPage: PropTypes.string,
    allData: PropTypes.object,
    slidePresentation: PropTypes.object,
    firstSave: PropTypes.func,
    history: PropTypes.object.isRequired,
    idGoogle: PropTypes.string,
};
Layout.defaultProps = {
    firstSave: () => {},
    isLoading: true,
    allData: {},
    classPage: '',
    slidePresentation: {},
    idGoogle: null,
};

const mapStateToProps = (state, props) => ({
    ...state,
    isLoading: state.common.isLoading,
    allData: get(state, 'webapp', {}),
    slidePresentation: get(state, 'webapp.slidePresentation', {}),
    idGoogle: get(props, 'match.params.name', null),
});

const mapDispatchToProps = dispatch => ({
    handleGetMeeetingPlan: idGoogle => dispatch(loadPlanWebapp(idGoogle)),
    firstSave: data => dispatch(firstSaveWebapp(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
