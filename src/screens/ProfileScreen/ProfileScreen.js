import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import CustomButton from '../../components/CustomButton'
import Heading from '../../components/Heading'

export default class ProfileScreen extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/images/app.jpg')}
                style={styles.container}>

                <View style={styles.root}>

                    <Heading
                        text="Profile"
                        fontSize={50}
                        fgColor="black"

                    />
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        height: 100,

                    }}>
                        <View style={styles.inputWrap}>
                            <Text style={styles.label} >Edit Profile</Text>
                            <CustomButton
                                text="Edit"
                                onPress={''}
                                style={styles.Editbtn}
                                bgColor="#6200EE"
                            />
                        </View>

                        <View style={styles.inputWrap}>
                            <Text style={styles.label}>Delete</Text>
                            <CustomButton
                                onPress={''}
                                text="Delete"
                                type="TERTIARY"
                                style={styles.Deletebtn}
                                bgColor="#6200EE"


                            />

                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    row: {
        flex: 1,
        flexDirection: "row"

    },
    label: {
        flex: 1,
        fontWeight: 'bold',
        paddingLeft: 50
    },
    inputWrap: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    Editbtn: {
        flex: 1,
        borderColor: "black",


    },
    Deletebtn: {
        flex: 1,

    },
    root: {
        alignItems: 'center',
        padding: 25,
    },


})