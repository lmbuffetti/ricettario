import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';

import jsonp from 'jsonp';
import { LoadableHeader, LoadableSpinner } from '../../components/Loadable';
// import {getLogin, ReloadPlan, saveData} from '../../actions/WebappActions';

class Layout extends Component {
    componentDidMount() {
        const { history, location } = this.props;
        // const { accessTokenLocal } = this.state;
        const self = this;
        const accessToken = localStorage.getItem('token');
        const urlCurrent = `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`;
        jsonp(urlCurrent, null, (err, data) => {
            if (data.error && location !== '/webapp/login') {
                self.setState({ accessTokenLocal: '' });
                // onLogin('');
                // localStorage.setItem('token','');
                history.push('/webapp/login');
            }
        });
    }

    render() {
        const {
            children,
            classPage,
            menuHeader,
            isLoading,
        } = this.props;

        return (
            <section className={`${classPage} LoginPage`}>
                <LoadableHeader menu_header={menuHeader} isAuthorized={false} />
                {React.cloneElement(children)}
                <LoadableSpinner isLoading={isLoading !== 0} />
            </section>
        );
    }
}

Layout.propTypes = {
    history: PropTypes.object.isRequired,
    isLoading: PropTypes.number,
    children: PropTypes.object.isRequired,
    classPage: PropTypes.string,
    menuHeader: PropTypes.string,
    location: PropTypes.string,
};
Layout.defaultProps = {
    isLoading: 0,
    classPage: '',
    menuHeader: '',
    location: null,
};

const mapStateToProps = (state, props) => ({
    user: state.user,
    isAuthorized: state.isAuthorized,
    isLoading: state.common.isLoading,
    location: get(props, 'location.pathname', null),
});

const mapDispatchToProps = () => ({
});
// noinspection JSUnusedGlobalSymbols
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
