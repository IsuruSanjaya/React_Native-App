import { View, Text, StyleSheet, ImageBackground, useWindowDimensions, Image } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'

import MenuItem from '../../components/HomeButton/HomeButton'
import logohome from '../../../assets/images/registered.png'
// const { width } = Dimensions.get("screen");
// const height = width * 0.6


export default function Home() {

    const onPayment = () => {

        console.warn("Payment")

    }
    return (

        <ImageBackground
            source={require('../../../assets/images/app.jpg')}
            style={styles.container}>

            <View style={styles.overlayContainer}>
                <View style={styles.top}>
                    <Text style={styles.header}>H O M E</Text>
                </View>


                <View style={styles.menuContainer}>


                    <CustomButton
                        text="Payment"
                        onPress={onPayment}
                        type="LINEAR"
                        bgColor="#6200EE"
                        fontWeight={20}

                    />
                    <CustomButton
                        text="Attendence"
                        onPress={onPayment}
                        type="LINEAR"
                        bgColor="#6200EE"
                        fontWeight={20}


                    />
                    <CustomButton
                        text="LogOut"
                        onPress={onPayment}
                        type="TERTIARY"
                        bgColor="#6200EE"
                        fontWeight={20}


                    />



                </View>
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({


    header: {
        color: '#fff',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255, .1)'
    },

    // image: {
    //     flex: 1,
    //     justifyContent: "center"
    // },


    // textGood: {
    //     color: "black",
    //     textAlign: "left",
    //     fontSize: 20,

    // },

    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'rgba(47,163,218, .4)'
    },
    top: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    menuContainer: {
        flex:1,
        // width : 100,
        // height: 100,
        flexDirection:'row',
        backgroundColor : '#ff9933',
        //alignSelf:'flex-start',
        marginTop: 40,
        margin: 10,
        //justifyContent:'center'
    },
    root: {
        alignItems: 'center',
        padding: 25,
    },


})