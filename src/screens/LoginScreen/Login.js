import { View, Text , Image,StyleSheet,useWindowDimensions} from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/student.png';

export default function Login() {


    // const navigation =useNavigation();
    const [useremail, setEmail] = useState('');
    const [password, setPassword]=useState('');
    const {height}=useWindowDimensions()

    const onSignInPressed=()=>{
        // auth().
        // createUserWithEmailAndPassword(useremail.trim(), password)
        // .then(()=>{
        //     console.log("User account created");
        // })
        // .catch(error =>{
        //     if(error.code === 'auth/email-already in use'){
        //         console.log('That email address is alreay in use !');

        //     }

        //     if (ErrorUtils.code === 'auth/invalid-email'){
        //         comsole.log('That email address is invalid!');

        //     }

        //     console.error(error);
        // });

    }


    const OnForgetPassword=()=>{

        console.warn('Forget password')

    }
  return (
    <View  style={styles.root}>

    <Image source={Logo} style={[styles.logo,{height:height*0.3}]} resizeMode="contain"/>
 

        <CustomInput
        value={useremail}
        setValue={setEmail}
        placeholder="Enter the email"
        />

        <CustomInput
        value={password}
        setValue={setPassword}
        placeholder="Password"
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
  )
}

const styles =StyleSheet.create({


    logo:{
        alignItems:'center',
        maxwidth:300,
        maxHeight:200
    },

    root:{
        alignItems:'center',
        padding:25,
    },

    fPassword:{
        backgroundColor:'white'
    }
})