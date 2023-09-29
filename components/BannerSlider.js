import React from 'react';
import { View, Text, Image} from 'react-native';

export default function BannerSlider({data}) {
  return (
    <View>
        <Image source={data.image} style={{height:170, width:310, borderRadius:10}}/>
     </View>
  );
}
