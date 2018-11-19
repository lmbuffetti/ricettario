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

class LoginLayout extends Component {
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

    render() {
        const {
            children,
            isLoading,
        } = this.props;

        return (
            <Fragment>
                {React.cloneElement(children)}
                <LoadableSpinner isLoading={isLoading !== 0} />
            </Fragment>
        );
    }
}

LoginLayout.propTypes = {
    children: PropTypes.object.isRequired,
    handleCheckAccess: PropTypes.func.isRequired,
    handleGetOptions: PropTypes.func.isRequired,
    user: PropTypes.object,
    options: PropTypes.object,
    isLoading: PropTypes.number.isRequired,
};

LoginLayout.defaultProps = {
    user: {},
    options: {},
};

const mapStateToProps = state => ({
    user: get(state, 'user', {}),
    options: get(state, 'options', {}),
    isLoading: get(state, 'common.isLoading', 0),

});

const mapDispatchToProps = dispatch => ({
    handleCheckAccess: bindActionCreators(checkAccess, dispatch),
    handleGetOptions: bindActionCreators(getOptions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginLayout));
