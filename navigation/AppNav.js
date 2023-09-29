import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { AuthContext } from '../context/AuthContext';
import { View, ActivityIndicator } from 'react-native';

const AppNav = () => {

  const {isLoading, userToken} = useContext(AuthContext)

  if(isLoading){
    return (
      <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
          <ActivityIndicator size={'large'} />
      </View>
      )
    
  }

  return (
    <NavigationContainer>

      {userToken !== null ? <AppStack />: <AuthStack />}
          {/* <AuthStack />
          <AppStack /> */}
      </NavigationContainer>
  );
}

export default AppNav;
