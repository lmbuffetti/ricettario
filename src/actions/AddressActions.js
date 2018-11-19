import { createActions } from 'redux-actions';
import {
    GET_ADDRESS_LIST,
    GET_ADDRESS_LIST_ERROR,
    SET_ADDRESS_LIST,
    SET_ADDRESS_LIST_ERROR,
    SEARCH_ADDRESS,
    SEARCH_ADDRESS_ERROR,
    GET_POSTAL_ADDRESS_LIST,
    GET_POSTAL_ADDRESS_LIST_ERROR,
    SET_POSTAL_ADDRESS_LIST,
    SET_POSTAL_ADDRESS_LIST_ERROR,
    RESET_ADDRESS_LIST,
} from './types/AddressTypes';

export const {
    getAddressList,
    getAddressListError,
    setAddressList,
    setAddressListError,
    resetAddressList,
    searchAddress,
    searchAddressError,
    getPostalAddressList,
    getPostalAddressListError,
    setPostalAddressList,
    setPostalAddressListError,
} = createActions({
    // Getting address list
    [GET_ADDRESS_LIST]: payload => payload,
    [GET_ADDRESS_LIST_ERROR]: payload => payload,
    // Setting address list
    [SET_ADDRESS_LIST]: payload => payload,
    [SET_ADDRESS_LIST_ERROR]: payload => payload,
    // Reset address list
    [RESET_ADDRESS_LIST]: payload => payload,
    // Searching address
    [SEARCH_ADDRESS]: payload => payload,
    [SEARCH_ADDRESS_ERROR]: payload => payload,
    // Getting postal address list
    [GET_POSTAL_ADDRESS_LIST]: payload => payload,
    [GET_POSTAL_ADDRESS_LIST_ERROR]: payload => payload,
    // Setting postal address list
    [SET_POSTAL_ADDRESS_LIST]: payload => payload,
    [SET_POSTAL_ADDRESS_LIST_ERROR]: payload => payload,
});
