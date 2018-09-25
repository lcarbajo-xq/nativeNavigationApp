import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    reduxifyNavigator
} from 'react-navigation-redux-helpers';

import AppNavigator from './app-navigator';

const reduxifiedApp = reduxifyNavigator(AppNavigator, 'root');

class AppNavigatorWithState extends reduxifiedApp {
   
}

function mapStateToProps(state){
    return {
        state: state.navigation
    }
}

export default connect(mapStateToProps)(AppNavigatorWithState);