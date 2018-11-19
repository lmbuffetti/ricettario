import { SAVE_ICON } from '../actions/types/WebappTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case SAVE_ICON:
            return action;
        default:
            return state;
    }
};
