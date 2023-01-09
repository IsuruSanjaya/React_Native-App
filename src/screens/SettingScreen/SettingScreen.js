import { View, Text, ImageBackground,StyleSheet } from 'react-native'
import React from 'react'

export default function SettingScreen() {
  return (
  
    <ImageBackground 
            source={require('../../../assets/images/app.jpg')}
            style={styles.container}>


    </ImageBackground>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
},
})