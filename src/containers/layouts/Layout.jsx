import React, { Component, Fragment } from 'react';
import get from 'lodash/get';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import { LoadableHeader, LoadableSpinner } from '../../components/Loadable';
import { checkAccess } from '../../actions/CommonActions';
import { getOptions } from '../../actions/OptionsActions';

class Layout extends Component {
    componentWillMount() {
        const {
            handleCheckAccess,
            handleGetOptions,
            options,
            user,
        } = this.props;

        if (isEmpty(user)) {
            handleCheckAccess();
        }
        if (isEmpty(options)) {
            handleGetOptions();
        }
    }

    componentWillUpdate() {
        const {
            loggedUserRole,
            history,
        } = this.props;
        if (loggedUserRole && loggedUserRole !== 'client') {
            history.push('/adviser/dashboard');
        }
    }

    render() {
        const {
            headerClass,
            isLoading,
            user,
            titleHeader,
            children,
            users,
            location,
        } = this.props;
        return (
            <section className="survey-wrap">
                <LoadableHeader
                    headerClass={headerClass}
                    titleHeader={titleHeader}
                    user={user}
                    location={location}
                    headerSurvey
                />
                {
                    typeof users.me.profile !== 'undefined'
                        && (
                            <Fragment>
                                {React.cloneElement(children)}
                            </Fragment>
                        )
                }
                <LoadableSpinner isLoading={isLoading > 0} />
            </section>
        );
    }
}

Layout.propTypes = {
    history: PropTypes.object,
    user: PropTypes.object,
    users: PropTypes.object,
    options: PropTypes.object,
    // isAuthorized: PropTypes.bool,
    isLoading: PropTypes.number.isRequired,
    children: PropTypes.object.isRequired,
    headerClass: PropTypes.string,
    handleCheckAccess: PropTypes.func.isRequired,
    handleGetOptions: PropTypes.func.isRequired,
    titleHeader: PropTypes.string,
    loggedUserRole: PropTypes.string,
    location: PropTypes.object,
};

Layout.defaultProps = {
    history: {},
    user: {},
    users: {},
    options: {},
    location: {},
    headerClass: 'inside-header',
    titleHeader: null,
    loggedUserRole: '',
};

const mapStateToProps = state => ({
    loggedUserRole: get(state, 'users.me.user_type', ''),
    user: get(state, 'user', {}),
    users: get(state, 'users', {}),
    options: get(state, 'options', {}),
    isLoading: get(state, 'common.isLoading', 1),
});

const mapDispatchToProps = dispatch => ({
    handleCheckAccess: bindActionCreators(checkAccess, dispatch),
    handleGetOptions: bindActionCreators(getOptions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
