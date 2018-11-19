import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';

import { checkAccess } from '../../actions/CommonActions';
import { getOptions } from '../../actions/OptionsActions';
import { LoadableSpinner } from '../../components/Loadable';

class OnboardingLayout extends Component {
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

OnboardingLayout.propTypes = {
    children: PropTypes.object.isRequired,
    isLoading: PropTypes.number.isRequired,
};

OnboardingLayout.defaultProps = {
};

const mapStateToProps = state => ({
    isLoading: get(state, 'common.isLoading', 1),

});

const mapDispatchToProps = dispatch => ({
    handleCheckAccess: bindActionCreators(checkAccess, dispatch),
    handleGetOptions: bindActionCreators(getOptions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OnboardingLayout));
