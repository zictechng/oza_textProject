import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({navigation, route}) => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text> Details Screen</Text>
      <Text> {route.params?.title}</Text>
      <Text> {route.params?.id}</Text>
     </View>
  );
}


export default DetailsScreen;