import { handleActions } from 'redux-actions';
import {
    BIND_PLAN,
    BIND_PLAN_ERROR,
    CREATE_PLAN,
    CREATE_PLAN_ERROR,
    GET_PLAN,
    GET_PLAN_ERROR,
    PATCH_PLAN,
    SET_PLAN,
    SET_SOFT_FACTS,
} from '../actions/types/PlanTypes';

export const defaultState = {
    plan: {},
    softFacts: [],
};

export default handleActions({
    [GET_PLAN]: state => state,
    [GET_PLAN_ERROR]: state => state,
    [SET_PLAN]: (state, action) => Object.assign({}, state, action.payload),
    [SET_SOFT_FACTS]: (state, action) => Object.assign({}, state, { softFacts: action.payload }),
    [CREATE_PLAN]: state => state,
    [CREATE_PLAN_ERROR]: state => state,
    [BIND_PLAN]: state => state,
    [BIND_PLAN_ERROR]: state => state,
    [PATCH_PLAN]: state => state,
}, defaultState);
