import isEmpty from 'lodash/isEmpty';
import api from '../api/config';
import {
    LOCAL_REQUEST_RECEIVED_DONE,
    REQUEST_RECEIVED_DONE,
    SPINNER_OFF,
    SPINNER_ON,
} from '../actions/types/CommonTypes';
import {
    ADD_CASHFLOW,
    ADD_CASHFLOW_TO_ASSET,
    ADD_CASHFLOW_TO_JOB,
    ADD_PARTNER_ADDRESS,
    ADD_PLAN_ADDRESS,
    ADD_PLAN_ADDRESS_PROPERTY,
    ADD_PLAN_ASSET,
    ADD_PLAN_CASHFLOW,
    ADD_PLAN_DEBT,
    ADD_PLAN_DEBT_CASHFLOW,
    ADD_PLAN_GIVING,
    ADD_PLAN_GIVING_CASHFLOW,
    ADD_PLAN_JOB,
    ADD_USER_ADDRESS,
    ADD_USER_POSTAL_ADDRESS,
    CREATE_PLAN_USER,
    CREATE_SOFT_FACTS,
    DELETE_SOFT_FACTS,
    GET_PLAN,
    GET_SOFT_FACTS,
    PATCH_PLAN,
    PATCH_PLAN_CASHFLOW,
    SET_MAIN_USER_ADDRESS_TO_PARTNER,
    SET_PLAN,
    SET_SOFT_FACTS,
    UPDATE_INCOME_CHANGES,
    UPDATE_PLAN_ADDRESS,
    UPDATE_PLAN_ASSET,
    UPDATE_PLAN_CASHFLOW,
    UPDATE_PLAN_DEBT,
    UPDATE_PLAN_JOB,
    ADD_DEPENDENTS_CASHFLOW,
    UPDATE_CASHFLOW,
    SUBMIT_PLAN,
} from '../actions/types/PlanTypes';
import { SET_TEMPORARY_USER, UPDATE_USER_IN_PLAN, UPDATE_USER_IN_PLAN_CASHFLOW } from '../actions/types/UserTypes';

const fetchPlan = store => next => (action) => {
    switch (action.type) {
        case GET_PLAN:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            api.plan.getPlan(action.payload)
                .then(
                    (response) => {
                        store.dispatch({ type: SET_PLAN, payload: response.data });
                        store.dispatch({ type: SPINNER_OFF });
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        case PATCH_PLAN: {
            next(action);
            store.dispatch({ type: SPINNER_ON });
            const { selector } = action.payload;
            delete action.payload.selector;
            const { isLocalRequest } = action.payload;
            delete action.payload.isLocalRequest;
            api.plan.patchPlan(selector, action.payload)
                .then(
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                        if (!isLocalRequest) {
                            store.dispatch({ type: REQUEST_RECEIVED_DONE });
                        } else {
                            store.dispatch({ type: LOCAL_REQUEST_RECEIVED_DONE });
                        }
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        }
        case UPDATE_USER_IN_PLAN: {
            next(action);
            store.dispatch({ type: SPINNER_ON });
            const { selector, selectorPlus } = action.payload;
            delete action.payload.selector;
            delete action.payload.selectorPlus;
            delete action.payload.isNiN;
            const { isLocalRequest } = action.payload;
            delete action.payload.isLocalRequest;
            const plan = store.getState().plan.plan_uuid || selectorPlus;
            api.plan.updatePlanUser(plan, selector, action.payload)
                .then(
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                        if (!isLocalRequest) {
                            store.dispatch({ type: REQUEST_RECEIVED_DONE });
                        } else {
                            store.dispatch({ type: LOCAL_REQUEST_RECEIVED_DONE });
                        }
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        }
        case UPDATE_INCOME_CHANGES: {
            next(action);
            store.dispatch({ type: SPINNER_ON });
            const { selectorPlus } = action.payload;
            delete action.payload.selector;
            delete action.payload.selectorPlus;
            const { isLocalRequest } = action.payload;
            delete action.payload.isLocalRequest;
            const plan = store.getState().plan.plan_uuid || selectorPlus;
            const mainPayload = action.payload.other_income_user.main;
            const partnerPayload = action.payload.other_income_user.partner;
            api.plan.updatePlanUser(plan, mainPayload.user_id, mainPayload)
                .then(
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                        if (!isLocalRequest) {
                            store.dispatch({ type: REQUEST_RECEIVED_DONE });
                        } else {
                            store.dispatch({ type: LOCAL_REQUEST_RECEIVED_DONE });
                        }
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            if (typeof partnerPayload.user_id !== 'undefined') {
                api.plan.updatePlanUser(plan, partnerPayload.user_id, partnerPayload)
                    .then(
                        () => {
                            store.dispatch({ type: SPINNER_OFF });
                            if (!isLocalRequest) {
                                store.dispatch({ type: REQUEST_RECEIVED_DONE });
                            } else {
                                store.dispatch({ type: LOCAL_REQUEST_RECEIVED_DONE });
                            }
                        },
                        () => {
                            store.dispatch({ type: SPINNER_OFF });
                        },
                    );
            }
            break;
        }
        case ADD_DEPENDENTS_CASHFLOW: {
            next(action);
            store.dispatch({ type: SPINNER_ON });
            api.plan.addPlanCashflow(store.getState().plan.plan_uuid, action.payload)
                .then(
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        }
        case UPDATE_USER_IN_PLAN_CASHFLOW: {
            next(action);
            const { selector } = action.payload;
            delete action.payload.selector;
            store.dispatch({ type: SPINNER_ON });
            api.plan.updatePlanUser(store.getState().plan.plan_uuid, selector, action.payload)
                .then(
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            if (typeof action.payload.cashflows_plan !== 'undefined') {
                action.payload.cashflows_plan.map((item) => {
                    store.dispatch({ type: SPINNER_ON });
                    if (item.plan_cashflow_id === null) {
                        const actionPlan = { plan_user_cashflow: item };
                        api.plan.updatePlanUser(store.getState().plan.plan_uuid, selector, actionPlan)
                            .then(
                                () => {
                                    store.dispatch({ type: SPINNER_OFF });
                                },
                                () => {
                                    store.dispatch({ type: SPINNER_OFF });
                                },
                            );
                    } else {
                        const actionPayload = {
                            plan_giving_id: item.plan_cashflow_id,
                            plan_giving_data: item,
                        };
                        store.dispatch({ type: UPDATE_PLAN_CASHFLOW, payload: actionPayload });
                        store.dispatch({ type: SPINNER_OFF });
                    }
                    return null;
                });
            }
            break;
        }
        case PATCH_PLAN_CASHFLOW: {
            next(action);
            const { isLocalRequest } = action.payload;
            delete action.payload.isLocalRequest;
            store.dispatch({ type: SPINNER_ON });
            api.plan.patchPlan(store.getState().plan.plan_uuid, action.payload)
                .then(
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                        if (!isLocalRequest) {
                            store.dispatch({ type: REQUEST_RECEIVED_DONE });
                        } else {
                            store.dispatch({ type: LOCAL_REQUEST_RECEIVED_DONE });
                        }
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            if (typeof action.payload.cashflows_plan !== 'undefined') {
                action.payload.cashflows_plan.map((item) => {
                    store.dispatch({ type: SPINNER_ON });
                    if (item.plan_cashflow_id === null) {
                        const actionPlan = { plan_user_cashflow: item };
                        api.plan.updatePlanUser(store.getState().plan.plan_uuid, action.payload.selector, actionPlan)
                            .then(
                                () => {
                                    store.dispatch({ type: SPINNER_OFF });
                                },
                                () => {
                                    store.dispatch({ type: SPINNER_OFF });
                                },
                            );
                    } else {
                        const dataPlanGivings = item;
                        const actionPayload = {
                            plan_giving_id: item.plan_cashflow_id,
                            plan_giving_data: dataPlanGivings,
                        };
                        store.dispatch({ type: UPDATE_PLAN_CASHFLOW, payload: actionPayload });
                        store.dispatch({ type: SPINNER_OFF });
                    }
                    return null;
                });
            }
            break;
        }
        case ADD_PLAN_ADDRESS:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            api.plan.addPlanAddress(store.getState().plan.plan_uuid, action.payload)
                .then(
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        case UPDATE_PLAN_ADDRESS: {
            next(action);
            store.dispatch({ type: SPINNER_ON });
            const { isLocalRequest } = action.payload;
            delete action.payload.isLocalRequest;
            const { selector } = action.payload;
            delete action.payload.selector;
            api.plan.updatePlanAddress(selector, action.payload)
                .then(
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                        if (!isLocalRequest) {
                            store.dispatch({ type: REQUEST_RECEIVED_DONE });
                        } else {
                            store.dispatch({ type: LOCAL_REQUEST_RECEIVED_DONE });
                        }
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        }
        case ADD_USER_ADDRESS: {
            next(action);
            store.dispatch({ type: SPINNER_ON });
            delete action.payload.isLocalRequest;
            api.plan.addPlanAddress(store.getState().plan.plan_uuid, action.payload)
                .then(
                    (response) => {
                        store.dispatch({
                            type: UPDATE_USER_IN_PLAN,
                            payload: {
                                selector: store.getState().plan.users.main.profile_uuid,
                                address_uuid: response.data.address.address_uuid,
                            },
                        });
                        store.dispatch({ type: SPINNER_OFF });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        }
        case ADD_USER_POSTAL_ADDRESS: {
            next(action);
            store.dispatch({ type: SPINNER_ON });
            delete action.payload.isLocalRequest;
            api.plan.addPlanAddress(store.getState().plan.plan_uuid, action.payload)
                .then(
                    (response) => {
                        store.dispatch({
                            type: UPDATE_USER_IN_PLAN,
                            payload: {
                                selector: store.getState().plan.users.main.profile.profile_uuid,
                                postal_address_uuid: response.data.address.address_uuid,
                            },
                        });
                        store.dispatch({ type: SPINNER_OFF });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        }
        case ADD_PARTNER_ADDRESS: {
            next(action);
            store.dispatch({ type: SPINNER_ON });
            const { isLocalRequest } = action.payload;
            delete action.payload.isLocalRequest;
            api.plan.addPlanAddress(store.getState().plan.plan_uuid, action.payload)
                .then(
                    (response) => {
                        store.dispatch({
                            type: UPDATE_USER_IN_PLAN,
                            payload: {
                                selector: isEmpty(store.getState().plan.users.partner) ? store.getState().users.temporaryUser : store.getState().plan.users.partner.profile_uuid,
                                address_uuid: response.data.address.address_uuid,
                            },
                        });
                        if (!isLocalRequest) {
                            store.dispatch({ type: REQUEST_RECEIVED_DONE });
                        } else {
                            store.dispatch({ type: LOCAL_REQUEST_RECEIVED_DONE });
                        }
                        store.dispatch({ type: SPINNER_OFF });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        }
        case SET_MAIN_USER_ADDRESS_TO_PARTNER:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            api.plan.addPlanAddress(store.getState().plan.plan_uuid, action.payload)
                .then(
                    () => {
                        // eslint-disable-next-line max-len
                        store.dispatch({ type: UPDATE_USER_IN_PLAN, payload: { selector: store.getState().plan.users.main.profile_uuid, address_uuid: store.setState().plan.users.main.address_uuid } });
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                        store.dispatch({ type: SPINNER_OFF });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        case CREATE_PLAN_USER: {
            next(action);
            store.dispatch({ type: SPINNER_ON });
            const { isLocalRequest } = action.payload;
            delete action.payload.isLocalRequest;
            api.plan.createPlanUser(store.getState().plan.plan_uuid, action.payload)
                .then(
                    (response) => {
                        store.dispatch({ type: SET_TEMPORARY_USER, payload: response.data.profile_uuid });
                        if (!isLocalRequest) {
                            store.dispatch({ type: REQUEST_RECEIVED_DONE });
                        } else {
                            store.dispatch({ type: LOCAL_REQUEST_RECEIVED_DONE });
                        }
                        store.dispatch({ type: SPINNER_OFF });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
        }
            break;
        case ADD_PLAN_GIVING:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            action.payload.charity_givings_plan.map((item) => {
                const dataPlanGivings = item;
                if (typeof item.profile_uuid !== 'undefined' && item.profile_uuid !== null) {
                    const actionPayload = {
                        plan_giving_id: item.plan_cashflow_id,
                        plan_giving_data: dataPlanGivings,
                    };
                    store.dispatch({ type: UPDATE_PLAN_CASHFLOW, payload: actionPayload });
                    store.dispatch({ type: SPINNER_OFF });
                } else {
                    api.plan.addPlanGiving(store.getState().plan.plan_uuid, dataPlanGivings)
                        .then(
                            (response) => {
                                const actionPayload = {
                                    plan_giving_id: response.data.plan_giving_uuid,
                                    plan_giving_data: dataPlanGivings,
                                };
                                store.dispatch({ type: ADD_PLAN_GIVING_CASHFLOW, payload: actionPayload });
                                store.dispatch({ type: SPINNER_OFF });
                            },
                            () => {
                                store.dispatch({ type: SPINNER_OFF });
                            },
                        );
                }
                return null;
            });
            break;
        case ADD_CASHFLOW_TO_JOB:
            next(action);
            action.payload.cashflows_plan.map((item) => {
                store.dispatch({ type: SPINNER_ON });
                if (item.plan_cashflow_id === null) {
                    const actionPlan = item;
                    api.plan.addPlanJobCashflow(store.getState().plan.plan_uuid, action.payload.selector, actionPlan)
                        .then(
                            () => {
                                store.dispatch({ type: SPINNER_OFF });
                            },
                            () => {
                                store.dispatch({ type: SPINNER_OFF });
                            },
                        );
                } else {
                    const dataPlanGivings = item;
                    const actionPayload = {
                        plan_giving_id: item.plan_cashflow_id,
                        plan_giving_data: dataPlanGivings,
                    };
                    store.dispatch({ type: UPDATE_PLAN_CASHFLOW, payload: actionPayload });
                    store.dispatch({ type: SPINNER_OFF });
                }
                return null;
            });
            break;
        case ADD_PLAN_JOB: {
            next(action);
            store.dispatch({ type: SPINNER_ON });
            api.plan.addPlanJob(store.getState().plan.plan_uuid, action.payload)
                .then(
                    () => {
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                        store.dispatch({ type: SPINNER_OFF });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        }
        case UPDATE_PLAN_JOB: {
            next(action);
            store.dispatch({ type: SPINNER_ON });
            const { selector } = action.payload;
            delete action.payload.selector;
            api.plan.updatePlanJob(store.getState().plan.plan_uuid, selector, action.payload)
                .then(
                    () => {
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                        store.dispatch({ type: SPINNER_OFF });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        }
        case ADD_PLAN_ADDRESS_PROPERTY:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            if (action.payload.postcode) {
                api.plan.addPlanAddress(store.getState().plan.plan_uuid, action.payload)
                    .then(
                        (response) => {
                            action.payload.address_uuid = response.data.address.address_uuid;
                            store.dispatch({ type: ADD_PLAN_ASSET, payload: action.payload });
                            store.dispatch({ type: SPINNER_OFF });
                        },
                        () => {
                            store.dispatch({ type: SPINNER_OFF });
                        },
                    );
            } else {
                store.dispatch({ type: ADD_PLAN_ASSET, payload: action.payload });
                store.dispatch({ type: SPINNER_OFF });
            }
            break;
        case ADD_PLAN_GIVING_CASHFLOW:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            // eslint-disable-next-line max-len
            api.plan.addPlanGivingCashflow(store.getState().plan.plan_uuid, action.payload.plan_giving_id, action.payload.plan_giving_data)
                .then(
                    () => {
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                        store.dispatch({ type: SPINNER_OFF });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        case UPDATE_PLAN_CASHFLOW: {
            next(action);
            store.dispatch({ type: SPINNER_ON });
            const selector = action.payload.plan_giving_id || action.payload.plan_giving_data.plan_cashflow_id;
            api.plan.updatePlanCashflow(store.getState().plan.plan_uuid, selector, action.payload.plan_giving_data)
                .then(
                    () => {
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                        store.dispatch({ type: SPINNER_OFF });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        }
        case UPDATE_CASHFLOW: {
            next(action);
            const { selector } = action.payload;
            delete action.payload.selector;
            store.dispatch({ type: SPINNER_ON });
            api.plan.updatePlanCashflow(store.getState().plan.plan_uuid, selector, action.payload)
                .then(
                    () => {
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                        store.dispatch({ type: SPINNER_OFF });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        }
        case ADD_PLAN_ASSET:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            api.plan.addPlanAsset(store.getState().plan.plan_uuid, action.payload)
                .then(
                    () => {
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                        store.dispatch({ type: SPINNER_OFF });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        case ADD_PLAN_CASHFLOW: {
            next(action);
            store.dispatch({ type: SPINNER_ON });
            let curPayload = [];
            if (action.payload.cashflows_plan[0].user_cashflow_type === 'assets') {
                curPayload.plan_giving_data = action.payload.cashflows_plan[0];
                curPayload.plan_asset_uuid = action.payload.cashflows_plan[0].asset_uuid;
                store.dispatch({ type: ADD_CASHFLOW_TO_ASSET, payload: curPayload });
                store.dispatch({ type: SPINNER_OFF });
            } else {
                curPayload = action.payload.cashflows_plan[0];
                store.dispatch({ type: ADD_CASHFLOW, payload: curPayload });
                store.dispatch({ type: SPINNER_OFF });
            }
            break;
        }
        case ADD_CASHFLOW:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            api.plan.addPlanCashflow(store.getState().plan.plan_uuid, action.payload)
                .then(
                    () => {
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                        store.dispatch({ type: SPINNER_OFF });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        case UPDATE_PLAN_ASSET: {
            next(action);
            store.dispatch({ type: SPINNER_ON });
            const { selector } = action.payload;
            delete action.payload.selector;
            api.plan.updatePlanAsset(store.getState().plan.plan_uuid, selector, action.payload)
                .then(
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        }
        case ADD_PLAN_DEBT:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            action.payload.cashflows = action.payload.cashflows_new;
            api.plan.addPlanDebt(store.getState().plan.plan_uuid, action.payload)
                .then(
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        case UPDATE_PLAN_DEBT:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            api.plan.updatePlanDebt(store.getState().plan.plan_uuid, action.payload.selector, action.payload)
                .then(
                    () => {
                        if (typeof action.payload.cashflows_to_update !== 'undefined') {
                            action.payload.cashflows_to_update.map((item) => {
                                store.dispatch({ type: SPINNER_ON });
                                const actionPayload = [];
                                actionPayload.plan_giving_data = item;
                                actionPayload.plan_giving_id = item.plan_cashflow_id;
                                actionPayload.plan_giving_data.plan_debt_uuid = action.payload.plan_debt_uuid;
                                store.dispatch({ type: UPDATE_PLAN_CASHFLOW, payload: actionPayload });
                                store.dispatch({ type: SPINNER_OFF });
                                return null;
                            });
                        } else {
                            store.dispatch({ type: REQUEST_RECEIVED_DONE });
                            store.dispatch({ type: SPINNER_OFF });
                        }
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        case ADD_CASHFLOW_TO_ASSET:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            api.plan.addPlanCashflowAsset(store.getState().plan.plan_uuid, action.payload.plan_asset_uuid, action.payload.plan_giving_data)
                .then(
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        case ADD_PLAN_DEBT_CASHFLOW:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            // eslint-disable-next-line max-len
            api.plan.addPlanGivingCashflow(store.getState().plan.plan_uuid, action.payload.plan_giving_id, action.payload.plan_giving_data)
                .then(
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        case CREATE_SOFT_FACTS:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            api.plan.addSoftFacts(action.payload.selector, action.payload)
                .then(() => {
                    store.dispatch({ type: REQUEST_RECEIVED_DONE });
                    store.dispatch({ type: GET_SOFT_FACTS, payload: action.payload.selector });
                    store.dispatch({ type: SPINNER_OFF });
                },
                () => {
                    store.dispatch({ type: SPINNER_OFF });
                });
            break;
        case DELETE_SOFT_FACTS:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            api.plan.deleteSoftFacts(action.payload.softFactsUUID)
                .then(() => {
                    store.dispatch({ type: GET_SOFT_FACTS, payload: action.payload.selector });
                    store.dispatch({ type: SPINNER_OFF });
                },
                () => {
                    store.dispatch({ type: SPINNER_OFF });
                });
            break;
        case GET_SOFT_FACTS:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            api.plan.getAllSoftFacts(action.payload)
                .then((response) => {
                    store.dispatch({ type: SET_SOFT_FACTS, payload: response.data });
                    store.dispatch({ type: SPINNER_OFF });
                },
                () => {
                    store.dispatch({ type: SPINNER_OFF });
                });
            break;
        case SUBMIT_PLAN:
            next(action);
            store.dispatch({ type: SPINNER_ON });
            api.plan.submitPlan(action.payload.planUUID)
                .then(
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                        store.dispatch({ type: REQUEST_RECEIVED_DONE });
                    },
                    () => {
                        store.dispatch({ type: SPINNER_OFF });
                    },
                );
            break;
        default:
            next(action);
    }
};

export default fetchPlan;
