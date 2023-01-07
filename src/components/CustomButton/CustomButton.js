import { Text , StyleSheet,Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type="PRIMARY" , bgColor, fgColor, fontWeight}) => {
  return (
    <Pressable onPress={onPress} 
    style={[
        styles.container,styles['container_${type}'],
        bgColor ? {backgroundColor:bgColor}:{},
        

    ]}>
        <Text 
        style={[
            styles.text,styles['text_${type}'],
            fgColor ? {color:fgColor}:{},
            fontWeight ? {fontSize:fontWeight}:{},
            ]}>
            {text}
        </Text>
    </Pressable>
  )
}


const styles=StyleSheet.create({

    container:{
        backgroundColor:'#3871F3',
        width:'100%',
        padding:20,
        marginVertical:10,
        alignItems:'center',
        borderRadius: 5,

    },

    text:{
        fontWeight:'bold',
        color:'white'

    },

    text_TERITIARY:{
        color:'gray'

    },

    text_BLACK:{
        color:'black'

    },

    container_TERTIARY:{
        backgroundColor:'white'
     },

    container_PRIMARY:{
       backgroundColor:'#3871F3'

    },

    container_LINEAR:{
        backgroundColor: ["#FF9800", "#F44336"],
   

    },
})
export default CustomButton