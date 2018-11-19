import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from '../reducers';

import UserMiddleware from '../middlewares/UserMiddleware';
import AddressMiddleware from '../middlewares/AddressMiddleware';
import CommonMiddleware from '../middlewares/CommonMiddleware';
import PlanMiddleware from '../middlewares/PlanMiddleware';
import OptionMiddleware from '../middlewares/OptionMiddleware';
import WebappMiddleware from '../middlewares/WebappMiddleware';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    const loggerMiddleware = require('redux-logger')();

    middlewares.push(loggerMiddleware);
}

function configureStore(data) {
    // eslint-disable-next-line no-unused-expressions, no-underscore-dangle
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReducer,
        data,
        composeEnhancers(
            applyMiddleware(
                ...middlewares,
                UserMiddleware,
                AddressMiddleware,
                CommonMiddleware,
                PlanMiddleware,
                OptionMiddleware,
                WebappMiddleware,
            ),
        ),
    );
}
// eslint-disable-next-line no-underscore-dangle
const store = configureStore(window.__initialState__);

export default store;
