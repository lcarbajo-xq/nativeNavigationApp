import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index-reducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
      'navigation',
      'body'
      ]
    }
  
const persistedReducer = persistReducer(persistConfig, reducer)
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation
)

const store = createStore(
  persistedReducer,
  applyMiddleware(navigationMiddleware)
)
const persistor = persistStore(store);

export { store, persistor };
