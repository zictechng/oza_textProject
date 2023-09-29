import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import InputField from '../components/InputField';
import RegistrationSVG from '../assets/images/misc/registration.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomButton from '../components/CustomButton';


const RegisterScreen = ({navigation}) => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [dobLabel, setDobLabel] = useState('Date of Birth')
    //const [mode, setMode] = useState('date');
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setOpen(false);
        setDate(currentDate);
        setDobLabel(date.toDateString())
        
      };
      //{date.toLocaleDateString()} this will show only date format
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center'}}>
          <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:25}}>

              <View style={{alignItems:'center'}}>
                  <RegistrationSVG width={300} height={300} style={{transform: [{rotate: '-5deg'}]}} />
              </View>
          
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
                style={{marginRight:5}} />} 
            
            />

            <InputField 
                label={'Email ID'} 
                icon={<MaterialIcons name='alternate-email' 
                size={20} color='#666' 
                style={{marginRight:5}} />}
                keyboardType='email-address' 
            
            />

            <InputField 
                label={'Password'} 
                icon={<Ionicons name='ios-lock-closed-outline' 
                size={20} color='#666' 
                style={{marginRight:5}} />}
                inputType="password" 
            
            />

            <InputField 
                label={'Confirm Password'} 
                icon={<Ionicons name='ios-lock-closed-outline' 
                size={20} color='#666' 
                style={{marginRight:5}} />}
                inputType="password" 
            
            />

            <View style={{flexDirection:'row', borderBottomColor:'#ccc',
                borderBottomWidth:1,
                padding:8,
                marginBottom: 30}}>

                <Ionicons name='calendar-outline' 
                    size={20} color='#666' 
                    style={{marginRight:5}} />
                <TouchableOpacity onPress={() =>setOpen(true)}>
                    <Text style={{color:'#666', marginLeft:5, marginTop:5}}>{date.toDateString()}</Text>
                </TouchableOpacity>
            </View>

            {/* <DateTimePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                }}
                onCancel={() => {
                setOpen(false)
                }}
            /> */}
        {open && (
            <DateTimePicker
            testID="datePicker"
            value={date}
            mode={'date'}
            maximumDate={new Date('2005-01-01 00:00:00')}
            minimumDate={new Date('1990-01-01 00:00:00')}
            onChange={onChange}
            negativeButton={{label: 'Cancel', textColor: '#ff0000',}}
            positiveButton={{label:'Ok', textColor: '#ad40af'}}
           themeVariant='#ad40af'
          />
        )}
        

            <CustomButton label={'Register'} onPress={() =>{}} />
            {/* <TouchableOpacity onPress={() => {}}
              style={{backgroundColor:'#ad40af', padding:20, borderRadius:10, marginBottom:30}}
            >
              <Text style={{
                textAlign:'center',
                fontWeight:'700',
                fontSize:16,
                color:'#fff',
                fontFamily:'Rregular'
              }}>Register</Text>
            </TouchableOpacity> */}

              <View style={{flexDirection:'row', justifyContent:'center', marginBottom:30}}>
                <Text>Already register?</Text>
                <TouchableOpacity onPress={() =>navigation.goBack()}>
                  <Text style={{color:'#ad40af', fontWeight:'700', fontFamily:'Rregular', fontSize:14, marginLeft: 5}}>Login</Text>
                </TouchableOpacity>
                
              </View>

          </ScrollView>

      

     </SafeAreaView>
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