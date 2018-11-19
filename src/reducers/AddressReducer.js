import _isArray from 'lodash/isArray';
import { RESET_ADDRESS_LIST, SET_ADDRESS_LIST, SET_POSTAL_ADDRESS_LIST } from '../actions/types/AddressTypes';

export const defaultState = {
    items: [],
    postalItems: [],
    temporaryAddress: {},
};


export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_ADDRESS_LIST: {
            const payload = _isArray(action.payload.data) ? action.payload.data : [];
            return {
                ...state,
                items: payload,
            };
        }
        case RESET_ADDRESS_LIST: {
            return {
                ...state,
                items: [],
                postalItems: [],
            };
        }
        case SET_POSTAL_ADDRESS_LIST: {
            const payload = _isArray(action.payload.data) ? action.payload.data : [];
            return {
                ...state,
                postalItems: payload,
            };
        }
        default:
            return state;
    }
};
