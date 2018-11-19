import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { LoadableFooter, LoadableHeader } from '../../components/Loadable';

class Website extends Component {
    componentWillMount() {
        const { titleHeader } = this.props;
        document.title = titleHeader;
    }

    render() {
        const {
            children,
            menuHeader,
            menuPosition,
            menuFooter,
            classPage,
        } = this.props;
        return (
            <Fragment>
                <div className={classPage}>
                    <LoadableHeader
                        isAuthorized={false}
                        menuHeader={menuHeader}
                        menuPosition={menuPosition}
                    />
                    {React.cloneElement(children)}
                    <LoadableFooter
                        isAuthorized={false}
                        menuFooter={menuFooter}
                        menuPosition={menuPosition}
                    />
                </div>
            </Fragment>
        );
    }
}

Website.propTypes = {
    // isLoading: PropTypes.bool,
    children: PropTypes.object.isRequired,
    menuHeader: PropTypes.string,
    menuFooter: PropTypes.string,
    menuPosition: PropTypes.string,
    classPage: PropTypes.string,
    titleHeader: PropTypes.string,
};
Website.defaultProps = {
    // isLoading: true,
    menuHeader: '',
    menuFooter: '',
    menuPosition: '',
    classPage: '',
    titleHeader: '',
};

export default withRouter(Website);
