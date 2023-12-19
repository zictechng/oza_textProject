import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

export default function CustomButton({label, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}
    style={{backgroundColor:'#1D2667', padding:15, borderRadius:10, marginBottom:30}}
    >
    <Text style={{
      textAlign:'center',
      fontWeight:'700',
      fontSize:16,
      color:'#fff',
      fontFamily:'Rregular'
    }}>{label}</Text>
  </TouchableOpacity>
  );
}
