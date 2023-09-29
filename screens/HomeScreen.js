import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
//import Carousel from 'react-native-reanimated-carousel';

import Feather from 'react-native-vector-icons/Feather'
import { freeGames, paidGames, sliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import {windowWidth } from '../utils/Dimensions'
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import { AuthContext } from '../context/AuthContext';

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
      <ScrollView style={{padding:20, marginTop:20}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:20}}>
            <Text style={{fontSize:16, fontFamily:'Rblack'}}>
                Hello {userInfo.userData.first_name}
            </Text>
            <TouchableOpacity onPress={() =>navigation.openDrawer()}>
            <ImageBackground source={require('../assets/images/user-profile.jpg')} 
            style={{width:35, height:35}} imageStyle={{borderRadius:25}} />
            </TouchableOpacity>
        </View>
        
        <View style={{flexDirection:'row', borderColor:'#c6c6c6', borderWidth:1, borderRadius:8, paddingHorizontal:10,
            paddingVertical:8}}>
            <Feather name='search' size={20} color="#c6c6c6" style={{marginRight:5}} />
            <TextInput placeholder='Search' />
        </View>
       
       <View style={{marginVertical:15, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontSize:16, fontFamily:'Rregular'}}>Upcoming Feeds</Text>
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

       <View style={{marginVertical: 20}}>
            <CustomSwitch selectionMode={1} 
            option1="Free to play"
            option2="Paid game" 
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
