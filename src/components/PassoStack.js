import { StatusBar } from 'expo-status-bar';
import {View, Text, Button } from 'react-native';
import React from 'react'


export default props => {
  return(
    <>
      <View style={{flex: 1 }}>
         <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            
             {props.voltar
                ? <Button 
                        title="voltar" 
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    />
                    :false
                    }   
                 
             {props.avancar
                ? <Button 
                        title="avançar" 
                        onPress={() => {
                            props.navigation.push(props.avancar, props.avancarParam || null)
                        }}
                    />
                    :false
                }      
         </View>

         <View style={{flex: 1 }}>
            //{props.children}
         </View>
       
        </View>
    </>
  )
}
