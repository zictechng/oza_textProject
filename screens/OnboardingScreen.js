import React ,{useContext}from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, StatusBar} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import OzaImg from'../assets/images/webbiit_logo.png'
import webbiitLogo from '../assets/images/webbiit_logo.png';
import { AuthContext } from '../context/AuthContext';

const OnboardingScreen = ({navigation}) => {

  const {test} = useContext(AuthContext)
  return (
    <SafeAreaView style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
    <View style={{marginTop: 100}}>
                        <StatusBar
                            barStyle='dark-content'
                            translucent
                            backgroundColor="transparent"
                        />
      <Text style={{fontSize: 40, fontWeight:'bold', color:'#20315f', fontFamily:'Rregular'}}>Webbiit </Text>
    </View>

    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        {/* <OzaImg width={300} height={300} style={{transform: [{rotate: '+15deg'}]}} /> */}
        <View style={{width:160, height:160, backgroundColor:'#1D2667', borderRadius:20, justifyContent:'center', alignItems:'center'}}>
          <Image source={webbiitLogo} style={{borderRadius:10, width:140, height:140}} />
        </View>
       
    </View>
    
      <TouchableOpacity style={{backgroundColor:'#1D2667', padding:15, width:'90%', borderRadius:5, flexDirection:'row', justifyContent:'space-between',
        marginBottom: 40}}
        onPress={() => navigation.navigate('Login2')}>
        <Text style={{fontWeight:'bold', fontSize:18, color:'#fff', fontFamily:'Rthin'}}>Get Started</Text>
        <MaterialIcons name='arrow-forward-ios' color='#fff' size={22} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default OnboardingScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });