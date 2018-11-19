import { handleActions } from 'redux-actions';
import { GET_OPTIONS, SET_OPTIONS } from '../actions/types/OptionTypes';

export const defaultState = {};

export default handleActions({
    [GET_OPTIONS]: state => state,
    [SET_OPTIONS]: (state, action) => Object.assign({}, state, action.payload),
}, defaultState);
