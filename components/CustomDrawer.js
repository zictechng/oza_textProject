import React, {useContext} from 'react';
import { View, Text, ImageBackground , Image} from 'react-native';
import { DrawerContentScrollView,  DrawerItemList} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../context/AuthContext';


const CustomDrawer = (props) => {

    const {logout, test} = useContext(AuthContext)

  return (

    <View style={{flex:1}}>
            <DrawerContentScrollView  {...props}
                    contentContainerStyle={{backgroundColor:'#8208d6'}}>
                    <ImageBackground source={require('../assets/images/menu-bg.jpeg')}
                    style={{padding:20}} >
                    <Image source={require('../assets/images/user-profile.jpg')}
                    style={{height:80, width:80, borderRadius:40, marginBottom:10}} />
                    <Text style={{color:'#fff', fontSize:18, fontFamily:'Rblack'}}>Ken Developer</Text>
                    
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'#fff', fontFamily:'Rregular', marginRight: 5}}>Coins 200,000</Text>
                        <FontAwesome5 name='coins' size={14} color='#fff' />
                    
                    </View>

                    </ImageBackground>
                    
                    <View style={{flex:1, backgroundColor:'#fff', paddingTop:10}}>
                        <DrawerItemList {...props} />
                     </View>
                
            </DrawerContentScrollView>

            <View style={{padding:10, borderTopWidth:1, borderTopColor:'#ccc'}}>
                <TouchableOpacity onPress={() =>{}} style={{paddingVertical:15}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name='share-social-outline' size={22} />
                        <Text style={{
                            fontSize:15,
                            fontFamily:'Rregular',
                            marginLeft: 5,
                        }}>Tell a friend</Text>
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>{logout()}} style={{paddingVertical:15}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name='exit-outline' size={22} />
                        <Text style={{
                            fontSize:15,
                            fontFamily:'Rregular',
                            marginLeft: 5,
                        }}>Sign Out</Text>
                    </View>
                    
                </TouchableOpacity>
                
            </View>
    </View>
    
  );
}

export default CustomDrawer;
