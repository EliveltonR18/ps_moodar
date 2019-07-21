import {createAppContainer, createStackNavigator} from 'react-navigation'

import History from './pages/History'
import { Image } from 'react-native';
import Main from './pages/Main';
import New from './pages/New';
import React from 'react';
import Update from './pages/Update';
import logo from './assets/logo.png';

export default createAppContainer(
    createStackNavigator({
        Main,
        New,
        History,
        Update,
    },{
        defaultNavigationOptions: {            
            headerTintColor: '#000',
            headerTitle: <Image style={{position:'absolute', flex: 1, justifyContent: 'center', height: 30, width: 100}} resizeMode="contain" source={logo}></Image>,
            headerBackTitle: null,       
        },
        mode: 'card'
    }
    )
);