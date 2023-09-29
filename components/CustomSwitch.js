import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function CustomSwitch({
    selectionMode,
    option1,
    option2,
    onSelectSwitch,
}) {

    const [getSelectionMode, setGetSelectionMode] = useState(selectionMode);

    const updateSwitchData = (value) => {
        setGetSelectionMode(value)
        onSelectSwitch(value)
        }
  return (
    <View style={{height:44, width:'100%',backgroundColor:'#e4e4e4', borderRadius:10,borderColor:'#ad40af',flexDirection:'row', justifyContent:'center'}}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
            flex:1,
            backgroundColor: getSelectionMode == 1 ? '#ad40af' : '#e4e4e4',
            borderRadius:10,
            justifyContent: 'center',
            alignItems:'center',
        }}
      >
        <Text style={{
            color: getSelectionMode == 1 ? 'white' : '#ad40af',
            fontSize:14,
            fontFamily:'Rregular',
        }}>{option1}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
            flex:1,
            backgroundColor: getSelectionMode == 2 ? '#ad40af' : '#e4e4e4',
            borderRadius:10,
            justifyContent: 'center',
            alignItems:'center',
        }}
      >
        <Text style={{
            color: getSelectionMode == 2 ? 'white' : '#ad40af',
            fontSize:14,
            fontFamily:'Rregular',
        }}>{option2}</Text>
      </TouchableOpacity>
     </View>
  );
}
