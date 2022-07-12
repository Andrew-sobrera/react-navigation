import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'


import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'


const Drawer = createDrawerNavigator();

 
export default props => {
    return(   
        <Drawer.Navigator  initialRouteName="TelaB">
        
            <Drawer.Screen name="TelaA" component={TelaA} />
            <Drawer.Screen name="TelaB" component={TelaB} />
            <Drawer.Screen name="TelaC" component={TelaC} />

        </Drawer.Navigator>
    )
}