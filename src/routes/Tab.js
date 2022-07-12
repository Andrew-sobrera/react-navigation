import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'


import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'


const Tab = createBottomTabNavigator()

 
export default props => {
    return(   
        <Tab.Navigator screenOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            labelStyle: {fontSize:30}
        }} initialRouteName="TelaB">
            <Tab.Screen name="TelaA" component={TelaA} />
            <Tab.Screen name="TelaB" component={TelaB} />
            <Tab.Screen name="TelaC" component={TelaC} />

           
        </Tab.Navigator>
    )
}