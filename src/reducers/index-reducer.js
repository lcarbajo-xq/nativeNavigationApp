import { combineReducers } from 'redux';

import navigation from './navigation';
import body from './reducers';
import userLogin from './user-login';

const reducer = combineReducers({
    body,
    navigation,
    userLogin
});

export default reducer;