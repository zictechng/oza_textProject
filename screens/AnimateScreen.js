import React, {useContext, useState} from 'react';
import { View, Text, Dimensions, StyleSheet, TextInput, Pressable,ScrollView, ActivityIndicator, Alert, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import styles from '../style';
import Svg, {Image, Ellipse, ClipPath} from 'react-native-svg'
import Animated, {useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay, runOnJS, withSequence, withSpring} from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { AuthContext } from '../context/AuthContext';
import IsValidEmail from '../components/checkEmailFormat';


export default function AnimateScreen({navigation}) {

  const { height, width } = Dimensions.get("window");

  const {login, isLoading, isBtnLoading, isButtonDisable} = useContext(AuthContext)

  const [email, setEmail] = useState(null);
  const[password, setPassword] = useState(null);


  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);

  const [isRegisterring, setIsRegisterring] = useState(false);

  const imageAnimatedStyle = useAnimatedStyle(() =>{
    const interpolation = interpolate(imagePosition.value, [0,1], [-height/2,0])
    
    return{
      transform: [{translateY: withTiming(interpolation, {duration:1000})}]
      //transform: [{translateX: withTiming(interpolation, {duration:1000})}] // this will slide from right to left
    }
  });

  const buttonsAnimatedStyle = useAnimatedStyle(() =>{
    const interpolation = interpolate(imagePosition.value, [0,1], [255, 0])
    return{
      opacity: withTiming(imagePosition.value, {duration:500}),
      transform:[{translateY: withTiming(interpolation, {duration:1000})}]
    }
  });

  // this will make the close button animation work
  const closeButtonContainerStyle = useAnimatedStyle(() =>{
    const interpolation = interpolate(imagePosition.value, [0,1], [180, 360])
    return{
      opacity: withTiming(imagePosition.value ===1 ? 0 : 1, {duration:800}),
      transform:[{rotate: withTiming(interpolation + "deg", {duration:1000})}]
    }
  })

  // this will make the form show/hide base on the button click on
  const formAnimatedStyle = useAnimatedStyle(() =>{
    const interpolation = interpolate(imagePosition.value, [0,1], [180, 360])
    return{
      opacity: imagePosition.value === 0 ? withDelay(400, withTiming(1, {duration: 800})) 
      : withTiming(0, {duration:300}),
      //transform:[{rotate: withTiming(interpolation + "deg", {duration:1000})}]
    }
  })

  // this will make the button have some shake effect when clicked
  const formButtonAnimatedStyle = useAnimatedStyle(() =>{
    return{
      transform: [{scale: formButtonScale.value}]
    }
  })

    const loginHandler = () =>{
      imagePosition.value = 0
      if(isRegisterring){
        //setIsRegisterring(false);
        runOnJS(setIsRegisterring)(false); // this is for javascript running format
      }
    }

    const registerHandler = () =>{
      imagePosition.value = 0
      if(!isRegisterring){
        //setIsRegisterring(true);
        runOnJS(setIsRegisterring)(true); // this is for javascript running format
      }
    }

    const registerUser = () =>{
      console.log("register Button Called ")
    }

    const loginUser = () =>{
      console.log("login Button Called ")
    }

    const UserLogin = () =>{
      navigation.navigate('Login')
      // const arrPassword = password;
      // const arrEmail = email;
      // //console.log('The length is', arrPassword);
      // // Check if input is valid
      // if (arrPassword == 0 || arrPassword == null || arrEmail == 0 || arrEmail == null) {
      //     Alert.alert("Please enter email address and password")
      //     return
      //     }
      // if(!IsValidEmail(arrEmail)){
      //     Alert.alert('Please enter a valid email')
      //      return
      // }
      // console.log("User login ", arrEmail, arrPassword)
      
      // login(email, password)
  }
  return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1, backgroundColor:'#FFF'}}>
               <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
               <Animated.View style={styles.container}>
      <StatusBar style="light" />
        <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle ]}>
          <Svg height={height +100} width={width}>

            <ClipPath id='clipPathId'>
                <Ellipse cx={width/2} rx={height} ry={height +100} />
            </ClipPath>
              <Image href={require('../assets/images/login-background.jpg')}
              width={width + 100} height={height + 100}
              preserveAspectRatio='xMidyMid slice'
                clipPath="url(#clipPathId)"
              />
          </Svg>
                <Pressable onPress={() => imagePosition.value = 1}>
                  <Animated.View style={[styles.closeButtonContainer, closeButtonContainerStyle]}>
                  <Text>X</Text>
                  </Animated.View>
                </Pressable>
        </Animated.View>
        
      <View style={styles.bottomContainer}>
          
          <Animated.View style={buttonsAnimatedStyle}>
            <Pressable style={styles.button} onPress={loginHandler}>
                <Text style={styles.buttonText}>
                  Login In
                </Text>
            </Pressable>
          </Animated.View>
          
          <Animated.View style={buttonsAnimatedStyle}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText} onPress={registerHandler}>
                Register
              </Text>
            </Pressable>
          </Animated.View>

          {/* Form activities comes here */}
          
          <Animated.View style={[styles.formInputContainer, formAnimatedStyle, {marginTop:isRegisterring? -50 : -60, marginBottom:isRegisterring? 20 : 50  }]}>
            {isRegisterring ? 
            // registration form element here
           
            // <ScrollView showsVerticalScrollIndicator={false}>
            //   <TextInput placeholder='Email' placeholderTextColor='#000' style={styles.textInput} />
            //   {isRegisterring && 
            //   <TextInput placeholder='Full Name' placeholderTextColor='#000' style={styles.textInput} />
            //   }
            //   <TextInput placeholder='Password' placeholderTextColor='#000' style={styles.textInput} />
                
            //   <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
            //     <Pressable onPress={() =>{formButtonScale.value = withSequence(withSpring(1.5), withSpring(1)), registerUser()}}>
            //       {/* <Text style={styles.buttonText}>{isRegisterring ? "Register" : "Login"}</Text> */}
            //       <Text style={styles.buttonText}>Register</Text>
            //     </Pressable>
            //     </Animated.View>
            //   </ScrollView>
              <>
              <View style={{marginHorizontal:20, justifyContent:'center', alignItems:'center', marginBottom:20}}>
                
                <Text style={{fontSize: 15, fontWeight:'500', color:'#aaa', letterSpacing:0.5}}>It's free to register and easy to join! registration takes just only three minutes. </Text>
                  </View>
                  <View>
                  <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
                    <Pressable onPress={() =>{formButtonScale.value = withSequence(withSpring(1.5), withSpring(1)), navigation.replace('Register')}}>
                      <Text style={styles.buttonText}>{isRegisterring ? "Register" : 'Login'}</Text>
                    </Pressable>
                  </Animated.View>
                  </View>
                  {/* <View style={{justifyContent:'center', alignItems:'center', margin:5}}><Text style={{fontSize:14, color:'#444'}}>I have an account</Text></View>
               */}
              </>
            
                : 
              // login form element here
              // <View>
              //   <TextInput 
              //   placeholder='Email' 
              //   placeholderTextColor='#000' 
              //   style={styles.textInput} 
              //   keyboardType='email-address'
              //   value={email}
              //   onChangeText={text =>setEmail(text)} 
              //   />
              //   <TextInput 
              //   placeholder='Password' 
              //   placeholderTextColor='#000' 
              //   style={styles.textInput}
              //   inputType="password"  
              //   value={password}
              //   onChangeText={text =>setPassword(text)}
              //   />
              //   <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
              //     <Pressable onPress={() =>{formButtonScale.value = withSequence(withSpring(1.5), withSpring(1)), UserLogin()}}>
              //       <Text style={styles.buttonText}>{isRegisterring ? "Register" : isBtnLoading ? <ActivityIndicator  color='#fff' size={25}/> : 'Login'}</Text>
              //     </Pressable>
              //     </Animated.View>
              // </View>
              <>
                <View style={{marginHorizontal:15, justifyContent:'center', alignItems:'center', marginBottom: 20}}>
                
                <Text style={{fontSize: 15, fontWeight:'500', color:'#aaa', letterSpacing:0.5}}>To login, you need valid email and your registered password details.</Text>
                </View>
                  <View>
                    <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
                      <Pressable onPress={() =>{formButtonScale.value = withSequence(withSpring(1.5), withSpring(1)), navigation.replace('Login')}}>
                        <Text style={styles.buttonText}>{isRegisterring ? "Register" : 'Login'}</Text>
                      </Pressable>
                    </Animated.View>
                  </View>
                  {/* <View style={{justifyContent:'center', alignItems:'center', margin:5}}><Text style={{fontSize:14, color:'#444'}}>Forget login details</Text></View>
               */}
              </>
              
            }
            
           </Animated.View>   
      </View>

              </Animated.View>
               </TouchableWithoutFeedback>
               
      </KeyboardAvoidingView>
   
  );
}
