import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CatScreen from '../screens/CatScreen';
import FavouriteScreen from '../screens/FavouriteScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import DetailsScreen from '../screens/DetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen component={HomeScreen} name="Home" options={{headerShown: false}}/>
          <Stack.Screen component={DetailsScreen}
          options={({route}) =>({
            title:route.params?.title // this will show the title on header bar (Optional)
          })} name="DetailsPage" />
      </Stack.Navigator>
    );
  }

const TabNavigator = () => {


  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle:{backgroundColor:'#ad40af'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor:'yellow',
    }}>
      {/* <Tab.Screen name="HomeTab" component={HomeScreen} 
        options={{
            tabBarIcon:({color, size}) =>(
                <Ionicons name="home-outline" color={color} size={size} />
            )
        }}/> */}

        <Tab.Screen name="HomeTab" component={HomeStack} 
        options={({route}) => ({
            tabBarStyle:{display: getTabBarVisibility(route),
                backgroundColor:'#1D2667'},
            tabBarIcon:({color, size}) =>(
                <Ionicons name="home-outline" color={color} size={size} />
            ),
        })}/>
      <Tab.Screen name="Cat" component={CatScreen}
       options={{
        tabBarBadge: 3,
        tabBarBadgeStyle:{backgroundColor:'yellow'},
        tabBarIcon:({color, size}) =>(
            <Feather name="shopping-bag" color={color} size={size} />
        )
    }}/>
      <Tab.Screen name="Favorite" component={FavouriteScreen}  options={{
            tabBarIcon:({color, size}) =>(
                <Ionicons name="heart-outline" color={color} size={size} />
            )
        }} />
      
    </Tab.Navigator>
  );
}

// this is use to hide the bottom tab in some pages

const getTabBarVisibility = route =>{

    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    if( routeName == 'DetailsPage'){
        return 'none'
    }
    return 'flex';
}

export default TabNavigator;
