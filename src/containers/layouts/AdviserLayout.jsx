import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';

import { checkAccess } from '../../actions/CommonActions';
import { getOptions } from '../../actions/OptionsActions';
import { LoadableSpinner } from '../../components/Loadable';
import { AdviserHeader } from '../../components/AdviserHeader';

class AdviserLayout extends Component {
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
        if (loggedUserRole && loggedUserRole === 'client') {
            history.push('/survey/dashboard');
        }
    }

    render() {
        const {
            children,
            isLoading,
            users,
        } = this.props;
        return (
            <Fragment>
                <AdviserHeader />
                {
                    typeof users.me.profile !== 'undefined'
                    && (
                        <Fragment>
                            {React.cloneElement(children)}
                        </Fragment>
                    )
                }
                <LoadableSpinner isLoading={isLoading !== 0} />
            </Fragment>
        );
    }
}

AdviserLayout.propTypes = {
    history: PropTypes.object,
    children: PropTypes.object.isRequired,
    handleCheckAccess: PropTypes.func.isRequired,
    handleGetOptions: PropTypes.func.isRequired,
    user: PropTypes.object,
    users: PropTypes.object,
    options: PropTypes.object,
    isLoading: PropTypes.number.isRequired,
    loggedUserRole: PropTypes.string,
};

AdviserLayout.defaultProps = {
    history: {},
    user: {},
    users: {},
    options: {},
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdviserLayout));
