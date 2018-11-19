import { createActions } from 'redux-actions';
import {
    GET_OPTIONS,
    GET_OPTIONS_ERROR,
    SET_OPTIONS,
    SET_OPTIONS_ERROR,
} from './types/OptionTypes';

export const {
    getOptions,
    getOptionsError,
    setOptions,
    setOptionsError,
} = createActions({
    // Getting options
    [GET_OPTIONS]: payload => payload,
    [GET_OPTIONS_ERROR]: payload => payload,
    // Setting options
    [SET_OPTIONS]: payload => payload,
    [SET_OPTIONS_ERROR]: payload => payload,
});
