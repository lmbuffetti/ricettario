import { SAVE_PLAN } from './types/WebappTypes';

export const newData = type => (dispatch) => {
    switch (type) {
        case 'login':
            dispatch({
                type: SAVE_PLAN,
                data: 'save_login',
            });
            break;
        default:
            dispatch({
                type: SAVE_PLAN,
                data: 'save',
            });
    }
};

export const PrintPDF = data => () => {
// eslint-disable-next-line no-console
    console.log(data);
};
