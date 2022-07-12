import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Passotack from '../components/PassoStack'

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();
 
export default props => {
    return(   
       <Stack.Navigator initialRouteName="TelaA" 
                        screenOptions={{ headershown: true}}>
            <Stack.Screen  name="TelaA"
                options={{title:'informaçoes iniciais'}}>
                {props => (
                    <Passotack {...props} avancar="TelaB">
                         <TelaA />
                    </Passotack>
                )}
            </Stack.Screen>
            <Stack.Screen  name="TelaB">
                {props => (
                        <Passotack {...props}  voltar avancar="TelaC">
                            <TelaB />
                        </Passotack>
                    )}
            </Stack.Screen>
            <Stack.Screen  name="TelaC" >
                {props => (
                            <Passotack {...props} voltar avancar="TelaC">
                                <TelaC />
                            </Passotack>
                        )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}