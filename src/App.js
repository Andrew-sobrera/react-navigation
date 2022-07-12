import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text } from 'react-native';
import React from 'react'

import TelaA from './views/TelaA'
import TelaB from './views/TelaB'
import TelaC from './views/TelaC'

export default props => {

      return(
      <>
        <SafeAreaView style={{flex:1,}}>   
            <TelaA />
           <TelaB />
            <TelaC />        
          </SafeAreaView>
        </>
      )
}
