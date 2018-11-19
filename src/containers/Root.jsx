import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        routes: PropTypes.object.isRequired,
        appHistory: PropTypes.object.isRequired,
    };

    render() {
        const { store, routes, appHistory } = this.props;

        return (
            <Provider store={store}>
                <Router history={appHistory}>
                    {routes}
                </Router>
            </Provider>
        );
    }
}

export default Root;
