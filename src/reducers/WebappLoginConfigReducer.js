import { ICON_SAVE, ICON_LOAD, LOGIN_WEBAPP } from '../actions/types/WebappTypes';

export default (state = { access_token: localStorage.getItem('token') || '' }, action) => {
    switch (action.type) {
        case LOGIN_WEBAPP:
            return state;
        case ICON_LOAD:
            return [action.type, action.client, action.partner];
        case ICON_SAVE:
            return {
                state: action.allData,
                done: true,
            };
        default:
            return state;
    }
};
