import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React , {createContext, useState, useEffect} from 'react';
import { BASE_URL } from "../config";
import { Alert } from "react-native";
import client from "./client";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

  const [test, setTest] = useState('Test Value');
  const [isLoading, setIsLoading] = useState(false);
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  // const login = (username, password)=>{
  //   setIsBtnLoading(true);
  //   setIsLoading(true);
  //   axios.post(`${BASE_URL}/api/login`, {
  //     username,
  //     password
  //   })
  //   .then(res =>{
  //     if(res.data.msg =='200') {
  //       console.log(res.data);
  //       let userInfo = res.data;
  //       setUserInfo(userInfo)
  //       setUserToken(userInfo.token)
  //       AsyncStorage.setItem('userToken', userInfo.token);
  //       AsyncStorage.setItem('userInfo', JSON.stringify( userInfo));
  //       }
  //       else if(res.data.status == '401') {
  //         Alert.alert('Invalid details')
  //         return
  //     }
  //   })
  //   .catch(e => {
  //     console.log('Login failed ', e);
  //   })
  //   setIsBtnLoading(false);
  //   setIsLoading(false);
   
  // }

  const login = async(username, password)=>{
    //console.log('Login details:', username, password);
    setIsBtnLoading(true);
    try {
      setIsLoading(true);
      const res = await client.post('/api/login', {
        username,
        password
    })
      //console.log(res.data);
  if(res.data.msg =='200'){ 
    //console.log('App Setting ' ,res.data.appData);
    let userInfo = res.data;
        setUserInfo(userInfo)
        setUserToken(userInfo.token)
        AsyncStorage.setItem('userToken', userInfo.token);
        AsyncStorage.setItem('userInfo', JSON.stringify( userInfo));
      }
    else if(res.data.status == '401') {
        Alert.alert('no user found')
        }
        else if(res.data.status == '404'){
          Alert.alert('Username or password incorrect')
          }
          else if(res.data.status == '402'){
           Alert.alert('Account not activated or not active')
            } 
            else if(res.data.status == '400'){
              Alert.alert('Username or password missing')
              } 
        else {
            Alert.alert('Sorry! Something went wrong')
            } 
      } catch (error) {
        console.log(error.message)
        if(error.message == 'Network Error'){
          Alert.alert('Server Error Occured')
              return
          } 
      }
      finally {
        setIsLoading(false);
        setIsBtnLoading(false);
        }
    }
      
    
    // setUserToken('iosiurrui');
    // AsyncStorage.setItem('userToken', 'iosiurrui');
    // setIsLoading(false);
  
//export default axios.create({baseURL: 'http://192.168.1.169:3500'})
  const logout = ()=>{
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('userInfo');
    setIsLoading(false);
  }

  const isLoggedIn = async()=>{
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      let userInfo = await AsyncStorage.getItem('userInfo');
        userInfo = JSON.parse(userInfo)
        if(userInfo){
          setUserToken(userToken);
          setUserInfo(userInfo);
          console.log('User LoggedIn ')
        }
      
      setIsLoading(false);
    } catch (error) {
      console.log(`Login error ${error}`);
      
    }
  }

  useEffect(() =>{
      isLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{
      login, logout, isLoading, userToken, userInfo,
      isBtnLoading}}>
      {children}
    </AuthContext.Provider>
  );
}
