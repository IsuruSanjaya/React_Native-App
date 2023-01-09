import { View, Text, Image, StyleSheet, useWindowDimensions ,ImageBackground} from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/student.png';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';



export default function Login({navigation}) {


    // const navigation =useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions()

    const onSignInPressed = () => {
        auth()
        .signInWithEmailAndPassword(email.trim(),password)
        .then(()=>{
            console.log("Sign In Successfull");
            navigation.navigate('SettingScreen')

        })
        .catch(error =>{
            if(error.code === 'auth not allowed'){
                console.log("Failes to sign in");
            }

            console.log(error);
        })

    }


    const OnForgetPassword = () => {

        console.warn('Forget password')

    }
    return (

        <ImageBackground
            source={require('../../../assets/images/app.jpg')}
            style={styles.container}>
        <View style={styles.root}>

            <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />

            <CustomInput
                placeholder="Email"
                value={email}
                setValues={setEmail}
            />

            <CustomInput
                placeholder="Password"
                value={password}
                setValues={setPassword}
                secureTextEntry={true}
            />


            <CustomButton
                text="Sign In"
                onPress={onSignInPressed}
                type="PRIMARY"
            />
            <CustomButton
                text="Forget Password"
                onPress={OnForgetPassword}
                type="TERTIARY"
            />
        </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({


    logo: {
        alignItems: 'center',
        maxwidth: 300,
        maxHeight: 200
    },

    root: {
        alignItems: 'center',
        padding: 25,
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
})