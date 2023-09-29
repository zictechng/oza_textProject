import React, {useContext, useState} from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import LoginSVG from '../assets/images/misc/login.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({navigation}) => {

  //const {test} = useContext(AuthContext)
  const {login, test} = useContext(AuthContext)

  const [email, setEmail] = useState(null);
  const[password, setPassword] = useState(null);

  return (
    <SafeAreaView style={{flex:1, justifyContent:'center'}}>
          <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:25}}>

              <View style={{alignItems:'center'}}>
                  <LoginSVG width={300} height={300} style={{transform: [{rotate: '-5deg'}]}} />
              </View>
          
              <Text style={{fontFamily:'Rblack', fontSize:28, fontWeight:'500', color:'#333', marginBottom:30}}> Login</Text>
          
              {/* <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8,
                marginBottom:25}}>
                  <MaterialIcons name='alternate-email' size={20} color='#666' style={{marginRight:5}} />
                  <TextInput placeholder='Email ID' style={{flex:1, paddingVertical:0}}
                  keyboardType='email-address' />
            </View> */}
            <Text>{test}</Text>
            <InputField 
              label={'Email ID'} 
              icon={<MaterialIcons name='alternate-email' 
              size={20} color='#666' 
              style={{marginRight:5}} />}
              keyboardType='email-address'
              value={email}
              onChangeText={text =>setEmail(text)} 
              
            />

            {/* <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8,
                  marginBottom:25}}>
                  <Ionicons name='ios-lock-closed-outline' size={20} color='#666' style={{marginRight:5}} />
                  <TextInput placeholder='Password' style={{flex:1, paddingVertical:0}}
                  secureTextEntry={true} 
                  />
                  <TouchableOpacity onPress={() =>{}}>
                    <Text style={{color:'#ad40af', fontWeight:'700'}}>
                      Forgot ?
                    </Text>
                  </TouchableOpacity>
            </View> */}

            <InputField 
                label={'Password'} 
                icon={<Ionicons name='ios-lock-closed-outline' 
                size={20} color='#666' 
                style={{marginRight:5}} />}
                inputType="password" 
                fieldButtonLabel={"Forgot?"}
                fieldButtonFunction={() =>{}}
                value={password}
                onChangeText={text =>setPassword(text)} 
            />
            
            <CustomButton label={"Login"} onPress={() =>{login(email, password)}} />
            {/* <TouchableOpacity onPress={() => {}}
              style={{backgroundColor:'#ad40af', padding:20, borderRadius:10, marginBottom:30}}
            >
              <Text style={{
                textAlign:'center',
                fontWeight:'700',
                fontSize:16,
                color:'#fff',
                fontFamily:'Rregular'
              }}>Login</Text>
            </TouchableOpacity> */}

              <Text style={{textAlign:'center', color:'#666', marginBottom:30}}>
                Or, login with ...
              </Text>

              <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:30}}>
              <TouchableOpacity onPress={() =>{}} style={{
                  borderColor:'#ddd',
                  borderWidth:2,
                  borderRadius:10,
                  paddingHorizontal:30,
                  paddingVertical:10,
                }}>
                  <GoogleSVG height={24} width={24} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() =>{}} style={{
                borderColor:'#ddd',
                borderWidth:2,
                borderRadius:10,
                paddingHorizontal:30,
                paddingVertical:10,
              }}>
                  <FacebookSVG height={24} width={24} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() =>{}} style={{
                borderColor:'#ddd',
                borderWidth:2,
                borderRadius:10,
                paddingHorizontal:30,
                paddingVertical:10,
              }}>
                  <TwitterSVG height={24} width={24} />
              </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row', justifyContent:'center', marginBottom:30}}>
                <Text>New to the app?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                  <Text style={{color:'#ad40af', fontWeight:'700', fontFamily:'Rregular', fontSize:14, marginLeft: 5}}>Register</Text>
                </TouchableOpacity>
                
              </View>

          </ScrollView>

      

     </SafeAreaView>
  );
}


export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });