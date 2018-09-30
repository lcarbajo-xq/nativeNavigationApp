import { 
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createDrawerNavigator } from 'react-navigation';
import React from 'react';

import Login from './screens/containers/login';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import About from './screens/containers/about';
import Profile from './screens/containers/profile';
import Luck from './screens/containers/luck';
import loader from './screens/containers/loading';

import Category from './screens/containers/category';
import Header from './sections/components/header';
import IconTab from './sections/components/icon-tab';
import DrawerAppIcon from './sections/components/drawer';

const Main = createStackNavigator(
    { 
        Home: Home,
        Category
    },
    {
    navigationOptions: {
            header: Header, 
        },
    cardStyle: {
        backgroundColor: 'white'
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
            activeBackgroundColor: '#e74c3c'
        }
    }
)

const WithModal = createStackNavigator(
    {
        Main: {
            screen: TabNavigator
        },
        Movie: Movie,
    },
    {
        mode: 'modal',
        headerMode:'none',
        navigationOptions: {
            gesturesEnabled: true
        }
    }
)

const DrawerNavigator = createDrawerNavigator(
    {
       Main: {
           screen: WithModal,
           navigationOptions: {
               title: 'Inicio'
           }
       },
       Sobre: {
           screen: About,
           navigationOptions: {
               title: 'Sobre Nosotros'
           }
       },
       Busca: {
           screen: Luck
       }
    },
    {
        drawerWidth: 200,
        drawerBackgroundColor: '#f6f6f6',
        contentComponent: DrawerAppIcon,
        contentOptions: {
            activeBackgroundColor: '#e74c3c',
            activeTintColor: 'white',
            inactiveTintColor: '#e74c3c',
            itemStyle: {
                borderBottomWidth: .5,
                borderBottomColor: '#e74c3c'
            },
            labelStyle: {
            },
            iconContainerStyle:  {
                marginHorizontal: 5,
            }
        }
    }
)

const SwitchNavigator = createSwitchNavigator (
    {
        App: DrawerNavigator,
        Login: Login,
        Loading: loader
    },
    {
        initialRouteName: 'Loading'
    }
)

export default SwitchNavigator;