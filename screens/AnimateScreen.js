import React, {useState} from 'react';
import { View, Text, Dimensions, StyleSheet, TextInput, Pressable,ScrollView } from 'react-native';
import styles from '../style';
import Svg, {Image, Ellipse, ClipPath} from 'react-native-svg'
import Animated, {useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay, runOnJS, withSequence, withSpring} from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

export default function AnimateScreen() {

  const { height, width } = Dimensions.get("window");

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
  return (
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
          
          <Animated.View style={[styles.formInputContainer, formAnimatedStyle, {marginTop:isRegisterring? -10 : 20, marginBottom:isRegisterring? 20 : 50  }]}>
            {isRegisterring ? 
            // registration form element here
           
            <ScrollView showsVerticalScrollIndicator={false}>
              <TextInput placeholder='Email' placeholderTextColor='#000' style={styles.textInput} />
              {isRegisterring && 
              <TextInput placeholder='Full Name' placeholderTextColor='#000' style={styles.textInput} />
              }
              <TextInput placeholder='Password' placeholderTextColor='#000' style={styles.textInput} />
                
              <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
                <Pressable onPress={() =>{formButtonScale.value = withSequence(withSpring(1.5), withSpring(1)), registerUser()}}>
                  {/* <Text style={styles.buttonText}>{isRegisterring ? "Register" : "Login"}</Text> */}
                  <Text style={styles.buttonText}>Register</Text>
                </Pressable>
                </Animated.View>
              </ScrollView>
                : 
              // login form element here
              <View>
                <TextInput placeholder='Email' placeholderTextColor='#000' style={styles.textInput} />
                <TextInput placeholder='Password' placeholderTextColor='#000' style={styles.textInput} />
                <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
                  <Pressable onPress={() =>formButtonScale.value = withSequence(withSpring(1.5), withSpring(1))}>
                    <Text style={styles.buttonText}>{isRegisterring ? "Register" : "Login"}</Text>
                  </Pressable>
                  </Animated.View>
              </View>
            }
            
           </Animated.View>   
      </View>

     </Animated.View>
  );
}
