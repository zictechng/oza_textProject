import 'react-native-gesture-handler';
import React, { useCallback, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import OzaImg from'./assets/accelerate.svg'
//import Svg, { Circle, Rect } from 'react-native-svg';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';
import AppNav from './navigation/AppNav';

const Stack = createNativeStackNavigator();

const App = () =>{

  let [fontsLoaded] = useFonts({
    'Rblack': require('./assets/fonts/Roboto-Black.ttf'),
    'Rlight': require('./assets/fonts/Roboto-Light.ttf'),
    'Rregular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Rthin': require('./assets/fonts/Roboto-Thin.ttf'),
  });
  if(!fontsLoaded){
    return null
  }

    
  return (
    <AuthProvider>
        <AppNav />
    </AuthProvider>
    
  );
}

// const Home = () =>{
//   return(
//     <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   )
// }

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
