import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import users from './UserReducer';
import address from './AddressReducer';
import actionWebappButton from './WebappButtonReducer';
import webapp from './WebappReducer';
import actionConfigurationWebapp from './WebappConfigurationReducer';
import actionWebsite from './WebsiteReducer';
// import actionWebappLoginConfig from './WebappLoginConfigReducer';
import common from './CommonReducer';
import plan from './PlanReducer';
import options from './OptionReducer';


export const rootReducer = combineReducers({
    users,
    plan,
    options,
    address,
    common,
    webapp,
    actionConfigurationWebapp,
    actionWebappButton,
    actionWebsite,
    form,
});

export default rootReducer;
