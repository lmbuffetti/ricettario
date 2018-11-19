import { SPINNER_OFF, SPINNER_ON } from '../actions/types/CommonTypes';
import { GET_OPTIONS, SET_OPTIONS, GET_OPTIONS_ERROR } from '../actions/types/OptionTypes';
import api from '../api/config';

const fetchOptions = store => next => (action) => {
    switch (action.type) {
        case GET_OPTIONS:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            api.options.get()
                .then(
                    (response) => {
                        store.dispatch({ type: SET_OPTIONS, payload: response.data });
                        store.dispatch({ type: SPINNER_OFF });
                    },
                    (error) => {
                        // eslint-disable-next-line no-console
                        console.log(error);
                        store.dispatch({ type: GET_OPTIONS_ERROR, payload: error });
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        default:
            next(action);
    }
};

export default fetchOptions;
