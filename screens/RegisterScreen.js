import React, {useContext, useState} from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert, ActivityIndicator} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import InputField from '../components/InputField';
import RegistrationSVG from '../assets/images/misc/registration.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomButton from '../components/CustomButton';
import IsValidEmail from '../components/checkEmailFormat';
import { AuthContext } from '../context/AuthContext';
import client from '../context/client';


const RegisterScreen = ({navigation}) => {
  const {login} = useContext(AuthContext)
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [dobLabel, setDobLabel] = useState('Date of Birth')
    const [isBtnLoading, setIsBtnLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    //const [mode, setMode] = useState('date');
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setOpen(false);
        setDate(currentDate);
        setDobLabel(date.toDateString())
        
      };
      const [dataDetails, setDataDetails] = React.useState({
        full_name: '',
        email: '',
        password: '',
        confirm_password: '',
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        })

        const handleInputChange = (name, val) => {
          setDataDetails({
            ...dataDetails,
            [name]: val,
          });
        };
        
    const sendReg = async() =>{
      if (dataDetails.full_name.length == 0 || dataDetails.email.length == 0 || dataDetails.password.length == 0 || dataDetails.confirm_password.length == 0) {
      Alert.alert('Required fields are missing')
       return
      }
      // validate email format
      if(!IsValidEmail(dataDetails.email)){
          Alert.alert('Invalid email format! Please enter a valid email')
          return
      }
      
      if (dataDetails.password !== dataDetails.confirm_password) {
          Alert.alert('password not match')
          return
      }
      
      const sendData = {
          display_name: dataDetails.full_name,
          email: dataDetails.email,
          password: dataDetails.password,
          confirm_password: dataDetails.confirm_password,
          }
       // update context hook value here
      const updatedCar = dataDetails.email;
      
      console.log('Register details:', sendData);
    try {
      setIsLoading(true);
      setIsBtnLoading(true);
      const res = await client.post('/api/register', sendData)
     // console.log(res.data);
      if(res.data.msg == '201'){ 
        Alert.alert('Registration successful! \n You can now login')
        
        // Navigate to the next screen
        setDataDetails({
          email: '',
          password: '',
          confirm_password: '',
          full_name: '',
          secureTextEntry: true,
          confirm_secureTextEntry: true,
          });
         //navigate('VerifyOTP');
        navigation.navigate("Login")
       }
       
      else if(res.data.status == '401') {
              Alert.alert('No user user found')
          }
      else if(res.data.status == '404'){
        Alert.alert('All fields are required')
      }
      else if(res.data.status == '402'){
          Alert.alert('Account not active')
      }
          else if(res.data.status == '400'){
          Alert.alert('Username or password missing')
          }
          else if(res.data.status == '409'){
              Alert.alert('Email already in use')
          }
          
      else {
          Alert.alert('Something went wrong')
          } 
      } catch (error) {
        console.log(error.message)
        if(error.message == 'Network Error'){
          Alert.alert('Server error occurred')
              return
          } 
      }
      finally {
        setIsLoading(false);
        setIsBtnLoading(false);
      }
  // //signupUserAction(dataDetails)
  // signupAction(dataDetails)
  // if(nextPage){
  //     navigation.navigate('VerifyOTP')
  // }
  // console.log("Navigation ", nextPage)
}
      //{date.toLocaleDateString()} this will show only date format
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={{flex:1, justifyContent:'center'}}>
          <View style={{alignItems:'center', margin:10}}>
                    <RegistrationSVG width={300} height={200} style={{transform: [{rotate: '-5deg'}]}} />
                </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:25}}>
        
             <Text style={{fontFamily:'Rblack', fontSize:28, fontWeight:'500', color:'#333', marginBottom:30}}> Register</Text>
            
              {/* <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8,
                  marginBottom:25}}>
                    <MaterialIcons name='alternate-email' size={20} color='#666' style={{marginRight:5}} />
                    <TextInput placeholder='Email ID' style={{flex:1, paddingVertical:0}}
                    keyboardType='email-address' />
              </View> */}

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
                <Text style={{textAlign:'center', color:'#666', marginBottom:30}}>
                  Or, register with email
                </Text>

              {/* Here we are using a custom input function */}
              <InputField 
                  label={'Full Name'} 
                  icon={<Ionicons name='person-outline' 
                  size={20} color='#666' 
                  autoCapitalize="sentences"
                  style={{marginRight:5}}
                  />} 
                value={dataDetails.full_name}
                onChangeText={(val) => handleInputChange("full_name", val)}
               />
               
              <InputField 
                  label={'Email ID'} 
                  icon={<MaterialIcons name='alternate-email' 
                  size={20} color='#666' 
                  style={{marginRight:5}} />}
                  keyboardType='email-address' 
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={dataDetails.email}
                  onChangeText={(val) => handleInputChange("email", val)}
                 />

              <InputField 
                  label={'Password'} 
                  icon={<Ionicons name='ios-lock-closed-outline' 
                  size={20} color='#666' 
                  style={{marginRight:5}} />}
                  inputType="password" 
                  value={dataDetails.password}
                  onChangeText={(val) => handleInputChange("password", val)}
                  
              />

              <InputField 
                  label={'Confirm Password'} 
                  icon={<Ionicons name='ios-lock-closed-outline' 
                  size={20} color='#666' 
                  style={{marginRight:5}} />}
                  inputType="password" 
                  value={dataDetails.confirm_password}
                  onChangeText={(val) => handleInputChange("confirm_password", val)}
                 />

              {/* <CustomButton label={'Register'}  /> */}
              <TouchableOpacity onPress={() =>sendReg()}
                style={{backgroundColor:'#1D2667', padding:15, borderRadius:10, marginBottom:30}}
              >
                <Text style={{
                  textAlign:'center',
                  fontWeight:'700',
                  fontSize:16,
                  color:'#fff',
                  fontFamily:'Rregular'
                }}>{isBtnLoading ? <ActivityIndicator size={20} color={'#fff'} /> : ' Register'} </Text>
              </TouchableOpacity>

                <View style={{flexDirection:'row', justifyContent:'center', marginBottom:30}}>
                  <Text>I have an account?</Text>
                  <View>
                    <TouchableOpacity onPress={() =>navigation.navigate('Login')}>
                      <Text style={{color:'#1D2667', fontWeight:'700', fontFamily:'Rregular', fontSize:14, marginLeft: 5}}>Login</Text>
                    </TouchableOpacity>
                  </View>
                  
                  
                </View>

            </ScrollView>

        

          </SafeAreaView>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    
  );
}


export default RegisterScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });