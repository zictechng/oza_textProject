import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessageScreen from '../screens/MessageScreen';
import MomentScreen from '../screens/MomentScreen';
import SettingScreen from '../screens/SettingScreen';
import TabNavigator from '../components/TabNavigator';


const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    // <Stack.Navigator screenOptions={{headerShown:false}}>
    //     <Stack.Screen component={HomeScreen} name="Home"/>
        
    // </Stack.Navigator>
    // drawerContent={props =><CustomDrawer {...props}/>} is for the customization of the drawer menu bar
    <Drawer.Navigator drawerContent={props =><CustomDrawer {...props}/>} 
        screenOptions={{headerShown:false, 
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor:'#fff',
        drawerInactiveTintColor:'#333',
        drawerLabelStyle:{marginLeft: -20, 
        fontFamily:'Rregular', fontSize:15}}}>
    
     <Drawer.Screen component={TabNavigator} name="Home"
        options={{
            drawerIcon:({color}) =>(
                <Ionicons name="home-outline" size={22} color={color} />
            )
        }}
     />
    <Drawer.Screen component={ProfileScreen} name="Profile"
        options={{
            drawerIcon:({color}) =>(
                <Ionicons name="person-outline" size={22} color={color} />
            )
        }}
    />
    <Drawer.Screen component={MessageScreen} name="Message"
        options={{
            drawerIcon:({color}) =>(
                <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
            )
        }}
    />
    <Drawer.Screen component={MomentScreen} name="Moment"
        options={{
            drawerIcon:({color}) =>(
                <Ionicons name="timer-outline" size={22} color={color} />
            )
        }}
    />
    <Drawer.Screen component={SettingScreen} name="Setting"
        options={{
            drawerIcon:({color}) =>(
                <Ionicons name="settings-outline" size={22} color={color} />
            )
        }}
    />

    </Drawer.Navigator>
  );
}

export default AppStack;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
