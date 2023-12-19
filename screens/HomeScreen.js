import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
//import Carousel from 'react-native-reanimated-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import { freeGames, paidGames, sliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import {windowWidth } from '../utils/Dimensions'
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import { AuthContext } from '../context/AuthContext';
import course1 from '../assets/images/halo-infinite.jpeg';
import course2 from '../assets/images/diablo-4.jpeg';

 const HomeScreen = ({navigation}) =>{

    const [gameTab, setGameTab] = useState(1);

    const {userInfo, test} = useContext(AuthContext)

    const renderBanner = ({item, index}) => {
        return <BannerSlider data={item}/>
    }

    const onSelectSwitch =(value) =>{
        setGameTab(value)
    }


  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
                        <StatusBar
                            barStyle='dark-content'
                            translucent
                            backgroundColor="transparent"
                        />
      <ScrollView style={{padding:20, marginTop:20}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:20}}>
            <Text style={{fontSize:16, fontFamily:'Rblack'}}>
                Hello {userInfo.userData.display_name}
            </Text>
            <TouchableOpacity onPress={() =>navigation.openDrawer()}>
            {/* <ImageBackground source={require('../assets/images/user-profile.jpg')} 
            style={{width:35, height:35}} imageStyle={{borderRadius:25}} /> */}
            <Ionicons name='apps-sharp' size={25} color={'#1D2667'} />
            </TouchableOpacity>
        </View>
        
        {/* <View style={{flexDirection:'row', borderColor:'#c6c6c6', borderWidth:1, borderRadius:8, paddingHorizontal:10,
            paddingVertical:8}}>
            <Feather name='search' size={20} color="#c6c6c6" style={{marginRight:5}} />
            <TextInput placeholder='Search' />
        </View> */}
       
       <View style={{marginVertical:15, flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
            <Text style={{fontSize:16, fontFamily:'Rregular'}}>Upcoming Training </Text>
            <TouchableOpacity onPress={() =>{}}>
                <Text style={{color:'#0aada8', fontFamily:'Rregular'}}>See more</Text>
            </TouchableOpacity>
       </View>

        <Carousel 
            ref={(c) => { this._carousel = c; }}
            data={sliderData}
            renderItem={renderBanner}
            sliderWidth={windowWidth - 40} // - 40 means subtract 20 from left margin, 20 from right margin
            itemWidth={300}
            loop={true}
        />

        
        <View style={{marginTop: 40,}}>
        <Text style={{fontSize:14, fontFamily:'Rregular', marginBottom:5}}>Feature Courses</Text>

        <View style={{flex:1,  flexDirection:'row'}}>
            
            <View style={{flex:2}}>
               
                <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={course1} style={{borderRadius:10, width:150, height:150}} />
                </View>
                
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:14, color:'#444'}}> Digital Marketing </Text>
                    <Text style={{fontSize:14, color:'#aaa'}}> Promote your business from your home  </Text>
                </View>
            </View>
            <View style={{flex:2,}}>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image source={course2} style={{borderRadius:10, width:150, height:150}} />
                </View>
                
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:14, color:'#444'}}> 1M in 30days </Text>
                    <Text style={{fontSize:14, color:'#aaa'}}> How you can make millions in just 30 days  </Text>
                </View>
            </View>
        </View>

        <View style={{flex:1,  flexDirection:'row', marginTop:40, marginBottom:20}}>
            
            <View style={{flex:2}}>
               
                <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={course1} style={{borderRadius:10, width:150, height:150}} />
                </View>
                
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:14, color:'#444'}}> Digital Marketing </Text>
                    <Text style={{fontSize:14, color:'#aaa'}}> Promote your business from your home  </Text>
                </View>
            </View>
            <View style={{flex:2,}}>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image source={course2} style={{borderRadius:10, width:150, height:150}} />
                </View>
                
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize:14, color:'#444'}}> 1M in 30days </Text>
                    <Text style={{fontSize:14, color:'#aaa'}}> How you can make millions in just 30 days  </Text>
                </View>
            </View>
        </View>
        </View>
       
       <View style={{marginVertical: 20}}>
            <CustomSwitch selectionMode={1} 
            option1="Free Courses"
            option2="Paid Courses" 
            onSelectSwitch={onSelectSwitch}
            />
       </View>

       {/* {gameTab == 1 && <Text>Free Games</Text>}
       {gameTab == 2 && <Text>Paid Games</Text>} */}

       {gameTab == 1 && freeGames.map(item =>(
        <ListItem key={item.id} 
        photo={item.poster} 
        title={item.title} 
        subTitle={item.subtitle}
        isFree={item.isFree}
        onPress={() => navigation.navigate('DetailsPage', {
            title: item.title,
            id: item.id
        })}
        />
       )) }
       {gameTab == 2 && paidGames.map(item =>(
        <ListItem key={item.id} 

        photo={item.poster} 
        title={item.title} 
        subTitle={item.subtitle}
        isFree={item.isFree}
        price={item.price}
        onPress={() => navigation.navigate('DetailsPage', {
            title: item.title,
            id: item.id
        })}
        />
       )) }
      </ScrollView>
     </SafeAreaView>
  );
}

export default  HomeScreen
