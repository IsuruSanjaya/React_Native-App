import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

export default class HomeButton extends React.Component {
    render(){
        return(
            <View style-={styles.menuItem}>
                <Image
                source={this.props.itemImage}
                style={styles.image}/>
            </View>
        )
    }
  
}


const styles=StyleSheet.create({
    menuItem:{
        width:'50%',
        height:'50%',
        padding:5,
        // backgroundColor:'#ccc',
        // borderColor:'#000',
        // borderWidth:5,

    },

    image:{
        width:"100%",
        height:"100%",
        opacity:0.8,
        borderColor:'#fff',
        borderWidth:3
    }
})