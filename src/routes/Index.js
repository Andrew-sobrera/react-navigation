
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import React from 'react'
//import Stack from './Stack'
//import Tab from './Tab'
import Drawer from './Drawer'

import { NavigationContainer } from '@react-navigation/native';

export default props => {
    return(
        
            <NavigationContainer>
               <Drawer />
              
            </NavigationContainer>
       
    )
}

