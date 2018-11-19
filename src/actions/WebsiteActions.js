import * as ActionWebsite from './types/WebsiteTypes';
import api from '../api/config';

export const saveFormHome = (formData, id) => (dispatch) => {
    api.website.saveForm(formData)
        .then(
            () => {
                if (id === 1) {
                    dispatch({
                        type: ActionWebsite.HOMEFORM1,
                    });
                } else {
                    dispatch({
                        type: ActionWebsite.HOMEFORM2,
                    });
                }
            },
            error => dispatch({ type: ActionWebsite.HOMEFORM1, payload: error }),
        );
};
