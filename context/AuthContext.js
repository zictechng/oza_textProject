import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React , {createContext, useState, useEffect} from 'react';
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

  const [test, setTest] = useState('Test Value');
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = (username, password)=>{
    setIsLoading(true);
    axios.post(`${BASE_URL}/api/login`, {
      username,
      password
    })
    .then(res =>{
      console.log(res.data);
      let userInfo = res.data;
      setUserInfo(userInfo)
      setUserToken(userInfo.token)
      AsyncStorage.setItem('userToken', userInfo.token);
      AsyncStorage.setItem('userInfo', JSON.stringify( userInfo));
    })
    .catch(e => {
      console.log('Login failed ', e);
    })
    setIsLoading(false);
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
    <AuthContext.Provider value={{test, login, logout, isLoading, userToken, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
}
