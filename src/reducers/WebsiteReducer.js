import { HOMEFORM1, HOMEFORM2 } from '../actions/types/WebsiteTypes';

export default (state = [], action) => {
    switch (action.type) {
        case HOMEFORM1:
        case HOMEFORM2:
            return action;
        default:
            return state;
    }
};
