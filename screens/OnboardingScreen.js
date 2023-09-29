import React ,{useContext}from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import OzaImg from'../assets/accelerate.svg'
import { AuthContext } from '../context/AuthContext';

const OnboardingScreen = ({navigation}) => {

  const {test} = useContext(AuthContext)
  return (
    <SafeAreaView style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
    <View style={{marginTop: 20}}>
      {/* <StatusBar style="dark" /> */}
      <Text style={{fontSize: 30, fontWeight:'bold', color:'#20315f', fontFamily:'Rregular'}}>OZA WALLET</Text>
    </View>

    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <OzaImg width={300} height={300} style={{transform: [{rotate: '+15deg'}]}} />
    </View>
    
      <TouchableOpacity style={{backgroundColor:'#AD40AF', padding:20, width:'90%', borderRadius:5, flexDirection:'row', justifyContent:'space-between',
        marginBottom: 40}}
        onPress={() => navigation.navigate('Login2')}>
        <Text style={{fontWeight:'bold', fontSize:18, color:'#fff', fontFamily:'Rthin'}}>Let's Begin</Text>
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