import api from '../api/config';
import { SPINNER_OFF, SPINNER_ON } from '../actions/types/CommonTypes';
import {
    GET_ADDRESS_LIST, SET_ADDRESS_LIST, GET_POSTAL_ADDRESS_LIST, SET_POSTAL_ADDRESS_LIST,
} from '../actions/types/AddressTypes';

const getAddressList = store => next => (action) => {
    switch (action.type) {
        case GET_ADDRESS_LIST:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            api.address.search(action.payload)
                .then(
                    (response) => {
                        store.dispatch({ type: SET_ADDRESS_LIST, payload: response });
                        store.dispatch({ type: SPINNER_OFF });
                    },
                    (error) => {
                        store.dispatch({ type: SET_ADDRESS_LIST, payload: error });
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        case GET_POSTAL_ADDRESS_LIST:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            api.address.search(action.payload)
                .then(
                    (response) => {
                        store.dispatch({ type: SET_POSTAL_ADDRESS_LIST, payload: response });
                        store.dispatch({ type: SPINNER_OFF });
                    },
                    (error) => {
                        store.dispatch({ type: SET_POSTAL_ADDRESS_LIST, payload: error });
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        default:
            next(action);
    }
};

export default getAddressList;
