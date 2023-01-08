import { View, Text } from 'react-native'
import React from 'react'

const Heading =({ text, type="PRIMARY", fontSize,fgColor})=>{
    return(
        <Text 
        style={[
            fgColor ? {color:fgColor}:{},
            fontSize ? {fontSize:fontSize}:{},
            ]}>
            {text}
        </Text>

    )
}

export default  Heading