import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../../screens/LoginScreen/Login';
import HomeScreen from '../../screens/HomeScreen/Home';
import SettingScreen from '../../screens/SettingScreen/SettingScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons'
import Login from '../../screens/LoginScreen/Login';
// import AttendenceScreen from '../../screens/PlacesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentScreen from '../../screens/PaymentScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import Register from '../../screens/RegisterScreen/Register';
import StudentRegi from '../../screens/StudentRegistration';


const Stack = createNativeStackNavigator();
//Screen names
const Tab = createBottomTabNavigator();
const Home = "Home";
const Setting = "SettingScreen";
const Logins = "Login"
const Profile = "ProfileScreen";
const Attendence = "AttendenceScreen"



export default function Navigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="About" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );


  // return (
  //   <NavigationContainer independent={true}>
  //      <Tab.Navigator
  //       initialRouteName={Login}
  //       screenOptions={({route})=>({
  //         tabBarIcon:({focused, color,size})=>{
  //           let iconName;
  //           let rn=route.name;

  //           if(rn==Home){
  //             iconName=focused ? 'Home': 'home-outline';
  //           }else if(rn==Setting){
  //             iconName=focused ? 'Setting': 'setting-outline';

  //           }else if (rn==Profile){
  //             iconName=focused ? 'Profile' : 'profile-outline';
  //           }

  //           return <Icon name={iconName} size={size} color={color}/>
  //         },
  //       })}>
  //     <Tab.Screen name="Home" component={Login}  />
  //     <Tab.Screen name="Setting" component={SettingScreen} />
  //      <Tab.Screen name="Profile" component={ProfileScreen} />
  //     {/* <Tab.Screen name="Attendence" component={AttendenceScreen}/>  */}

  //   </Tab.Navigator>
  //   </NavigationContainer>

  //   // <NavigationContainer>
  //   // <Stack.Navigator>
  //   //   {/* <Stack.Screen name="Login" component={Login} /> */}
  //   //   <Stack.Screen name="Home" component={Login}  options={{headerShown:false}}/>
  //   // </Stack.Navigator>
  //   // </NavigationContainer>

  // )

}
