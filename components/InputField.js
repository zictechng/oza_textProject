import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function InputField({label, icon,inputType, keyboardType, fieldButtonLabel,fieldButtonFunction, value, onChangeText}) {
  return (
    <View 
                style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8,
                  marginBottom:25}}>
                  {/* <Ionicons name='ios-lock-closed-outline' size={20} color='#666' style={{marginRight:5}} /> */}
                  
                  {icon}
                  {inputType =='password'? (
                    <TextInput placeholder={label}
                    keyboardType={keyboardType} 
                    style={{flex:1, paddingVertical:0}}
                    secureTextEntry={true}
                    value={value}
                    onChangeText={onChangeText}
                  />) : (
                    <TextInput placeholder={label} 
                    keyboardType={keyboardType}
                    value={value}
                    onChangeText={onChangeText}
                    style={{flex:1, paddingVertical:0}}
                     />
                    )}
                   
                 
                  <TouchableOpacity onPress={fieldButtonFunction}>
                    <Text style={{color:'#1D2667', fontWeight:'700'}}>
                      {fieldButtonLabel}
                    </Text>
                  </TouchableOpacity>
    </View>
  );
}
