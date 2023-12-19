import React, {useContext, useState} from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert, StatusBar, ActivityIndicator} from 'react-native';
import LoginSVG from '../assets/images/misc/login.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomButton from '../components/CustomButton';
import webbiitLogo from '../assets/images/webbiit_logo.png';
import InputField from '../components/InputField';
import { AuthContext } from '../context/AuthContext';
import IsValidEmail from '../components/checkEmailFormat';

const LoginScreen = ({navigation}) => {

  //const {test} = useContext(AuthContext)
  const {login, test, isBtnLoading} = useContext(AuthContext)

  const [email, setEmail] = useState(null);
  const[password, setPassword] = useState(null);


  const UserLogin = () =>{
  
    const arrPassword = password;
    const arrEmail = email;
    //console.log('The length is', arrPassword);
    // Check if input is valid
    if (arrPassword == 0 || arrPassword == null || arrEmail == 0 || arrEmail == null) {
        Alert.alert("Please enter email address and password")
        return
        }
    if(!IsValidEmail(arrEmail)){
        Alert.alert('Please enter a valid email')
         return
    }
    console.log("User login ", arrEmail, arrPassword)
    
    login(email, password)
}

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <SafeAreaView style={{flex:1, justifyContent:'center'}}>

            <View style={{justifyContent:'center', alignItems:'center', marginTop:80}}>
            <View style={{width:85, height:85, backgroundColor:'#1D2667', borderRadius:20, justifyContent:'center', alignItems:'center'}}>
                <Image source={webbiitLogo} style={{borderRadius:10, width:80, height:80}} />
            </View>
            </View>
              <View style={{marginHorizontal:30, marginTop:20}}>
                  <Text style={{fontFamily:'Rblack', fontSize:28, fontWeight:'500', color:'#333', marginBottom:30}}> Login</Text>
              </View>
            
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:30}}>
              <StatusBar barStyle="dark-content"
                            translucent
                            backgroundColor="transparent" />

            {/* <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8,
              marginBottom:25}}>
                <MaterialIcons name='alternate-email' size={20} color='#666' style={{marginRight:5}} />
                <TextInput placeholder='Email ID' style={{flex:1, paddingVertical:0}}
                keyboardType='email-address' />
            </View> */}
            
            <InputField 
            label={'Email ID'} 
            icon={<MaterialIcons name='alternate-email' 
            size={20} color='#666' 
            style={{marginRight:5}} />}
            keyboardType='email-address'
            autoCapitalize="none"
            autoCorrect={false}
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

            {/* <CustomButton label={"Login"}  /> */}
            <TouchableOpacity onPress={() => UserLogin()}
            style={{backgroundColor:'#1D2667', padding:15, borderRadius:10, marginBottom:30}}
            >
            <Text style={{
              textAlign:'center',
              fontWeight:'700',
              fontSize:16,
              color:'#fff',
              fontFamily:'Rregular'
            }}>{isBtnLoading? ' ' : "Login"}{isBtnLoading && <ActivityIndicator color='#fff' size={25} />}</Text>
            </TouchableOpacity>

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
                <Text style={{color:'#1D2667', fontWeight:'700', fontFamily:'Rregular', fontSize:14, marginLeft: 5}}>Register</Text>
              </TouchableOpacity>
              
            </View>

            </ScrollView>
            </SafeAreaView>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    
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