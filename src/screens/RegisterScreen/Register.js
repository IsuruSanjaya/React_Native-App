import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton';
import Heading from '../../components/Heading';
import auth from '@react-native-firebase/auth';

export default function Register() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');


  const createBtn = ()=>{
    auth()
    .createUserWithEmailAndPassword(email.trim(),password)
    .then(()=>{
      console.log('User account created ');
    }).catch(error=>{
      if(error.code === 'auth/email already used'){
        console.log('That email address is already in use!');
      }


      if(error.code === 'auth/invalid email'){
        console.log('That email address is invalid');

      }


      console.error(error);
    })
  }

  return (

    <ImageBackground
      source={require('../../../assets/images/app.jpg')}
      style={styles.container}>

      <View style={styles.root}>
        <Heading
        text="XOXO"
        fontSize={50}
        
        />
        

        
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
          text="Register"
          onPress={createBtn}
          type="TERTIARY"
          />

          <CustomButton
          text="Already have an account"
          onPress={''}
          type="TERTIARY"
          bgColor="#808080"
          
          
          />

      </View>


    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  root: {
    alignItems: 'center',
    padding: 25,
  },
})