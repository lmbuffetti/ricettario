import jsonp from 'jsonp';
import { APIKeyGoogle } from '../helpers/constants_webapp';
import * as ActionWebsite from './types/WebappTypes';
import api from '../api/config';


export const saveIcons = data => () => {
    const formData = {
        action: 'updateConfig',
        idGoogleSheet: '1QlRg05kfabk2fJdDLCDg2s1ZV3tNphT96t8Fb0OWPK8',
        access_token: localStorage.getItem('token'),
        file: 'IconsNew',
        allData: data,
    };
    api.webapp.saveData(formData)
        .then(
            (response) => {
                // eslint-disable-next-line no-console
                console.log(response);
            },
        );
};

export const loadIcons = () => (dispatch) => {
    const urlIcons = `https://sheets.googleapis.com/v4/spreadsheets/1QlRg05kfabk2fJdDLCDg2s1ZV3tNphT96t8Fb0OWPK8/values/IconsNew!A2:CE100?key=${APIKeyGoogle}&access_token=${localStorage.getItem('token')}`;
    jsonp(urlIcons, null, (err, data) => {
        dispatch({
            type: ActionWebsite.SAVE_ICON,
            data: data.values,
        });
    });
};
