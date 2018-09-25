/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        Text, 
        View, 
        Image} from 'react-native'; 


import Loader from './src/utils/loader';

import { Provider } from 'react-redux';
// import store from './src/utils/store';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor }  from './src//utils/store'; 

import AppLayout from './src/app';
import AppNavigatorWithState from './src/app-navigator-with-state';

// type Props = {};
export default class App extends Component{


  render() {
    return ( 
      <Provider
        store={ store }>
        <PersistGate loading={<Loader  />} persistor={ persistor } >
          {/* <AppLayout /> */}
          <AppNavigatorWithState />
        </PersistGate>
      </Provider>
    )
  }
}
