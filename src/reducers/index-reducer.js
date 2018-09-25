import { combineReducers } from 'redux';

import navigation from './navigation';
import body from './reducers';

const reducer = combineReducers({
    body,
    navigation
});

export default reducer;