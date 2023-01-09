import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton';
import Heading from '../../components/Heading';
import auth from '@react-native-firebase/auth';

export default function StudentRegi() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Age, setAge] = useState('');


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
          placeholder="Name"
          value={name}
          setValues={setName}

        />
        <CustomInput
          placeholder="Age"
          value={Age}
          setValues={setAge}
        />  
        <CustomInput
          placeholder="Email"
          value={email}
          setValues={setEmail}
        />       

          <CustomButton
          text="Register"
          onPress={createBtn}
          type="TERTIARY"
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