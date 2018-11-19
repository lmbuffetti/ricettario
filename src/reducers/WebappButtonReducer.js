import { SAVE_PLAN } from '../actions/types/WebappTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case SAVE_PLAN:
            return action;
        default:
            return state;
    }
};
