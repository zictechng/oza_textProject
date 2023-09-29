import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { windowWidth } from '../utils/Dimensions';

export default function ListItem ({photo, title, subTitle, isFree, price, onPress}) {
  return (
    <View style={{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
        marginBottom: 40}}>
            <View style={{flexDirection:'row', alignItems:'center', flex: 1}}>
                <Image source={photo}
                style={{width:55, height:55, borderRadius: 10, marginRight: 8}}/>
            
                <View style={{width: windowWidth - 220}}>
                    <Text style={{
                        color:'#333',
                        fontFamily:"Rregular",
                        fontSize:14
                    }}>{subTitle}</Text>
                    <Text 
                        numberOfLines={1} // this will add .... when letters are too long
                        style={{
                        color:'#333',
                        fontFamily:"Rregular",
                        fontSize:14,
                        textTransform:'uppercase'
                    }}>{title}</Text>
                </View>

            </View> 

            <TouchableOpacity onPress={onPress} style={{
                backgroundColor:'#0aada8',
                padding:10,
                width:100,
                borderRadius:10,
                alignItems:'center'
            }}>
                <Text style={{
                        color:'#fff',
                        fontFamily:"Rregular",
                        fontSize:14,
                        }}>{isFree == "Yes" && "Play"}
                        {isFree == "No" && price}</Text>
            </TouchableOpacity>

     </View>
  );
}
