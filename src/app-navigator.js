import { 
    createStackNavigator,
    createBottomTabNavigator } from 'react-navigation';
import React from 'react';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import About from './screens/containers/about';
import Profile from './screens/containers/profile';
import Luck from './screens/containers/luck';

import Category from './screens/containers/category';
import Header from './sections/components/header';
import IconTab from './sections/components/icon-tab';

const Main = createStackNavigator(
    { 
        Home: Home,
        Movie: Movie,
        Category
    },
    {
    navigationOptions: {
            header: Header, 
        }
    }
)

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Main,
            navigationOptions: {
                title: 'Inicio',
                tabBarIcon: <IconTab icon="🏡"/>,
            }
        },
        About: {
            screen: About,
            navigationOptions: {
                title: 'Sobre nosotros',
                tabBarIcon: <IconTab icon="☝"/>,
            }
        },
        Luck: {
            screen: Luck,
            navigationOptions: {
                title: 'Tener suerte',
                tabBarIcon: <IconTab icon="🍀"/>,
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil',
                tabBarIcon: <IconTab icon="👨"/>,
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: '#65a721'
        }
    }
)

export default TabNavigator;