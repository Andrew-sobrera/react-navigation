import { StatusBar } from 'expo-status-bar';
import {View, Text } from 'react-native';
import React from 'react'


export default props => {
  return(
    <>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.corFundo || '#000'
      }}>
        <Text style={{fontSize: 50, color: props.corTexto || '#FFF'}}>
          {props.children}
        </Text>
      </View>
    </>
  )
}
