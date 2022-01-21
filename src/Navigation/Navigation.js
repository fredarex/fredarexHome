import  React,{useState,useEffect} from 'react';
import {View, Text, Button,StyleSheet,Linking, FlatList,TextInput, RefreshControl, TouchableOpacity, TouchableHighlight, Alert, Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import OnBoarding from '../screens/OnBoarding/OnBoarding';
import { StatusBar } from 'react-native';
import { COLORS } from '../constants';
import MainLayout from '../screens/MainLayout';
import {AsyncStorage} from '@react-native-async-storage/async-storage';



const Stack = createStackNavigator();

// const OnBoardingRoute = ({navigation}) => {
//     return (
//         <NavigationContainer>
//         <StatusBar style="auto" />
//         <Stack.Navigator
            
//             screenOptions = {
//                 {
//                     initialRouteName:"onBoarding",
//                     ...TransitionPresets.DefaultTransition,
//                     headerMode:"screen",
                    
//                     headerStyle:{elevation:0}
                    
                    
                    
//                 }
            
//             }
//             >
//                 <Stack.Screen name="OnBoarding" component={OnBoarding} options={({navigation})=> (
//                     {
//                         headerShown:false
//                     }
//                 )} />
//                 <Stack.Screen name="Login" component={Login} options={({navigation}) =>({
//                 headerShown:false
//                 })} />
             
//                  <Stack.Screen name="Register" component={Register} options={({navigation}) =>({
//                 headerShown:false
//                 })}
            
//                 />

//                 <Stack.Screen name="MainLayout" component={MainLayout} options={({navigation})=> ({
//                     headerShown:false
//                 })}/>

//         </Stack.Navigator>
//     </NavigationContainer>
//     )
// }


const Navigation = ({navigation}) => {
//    const [loadingPage, setLoadingPage] = useState('onBoarding');
//     const retrieveData = async () => {
//         try {
//             var value = await AsyncStorage.getItem('@onBoardingPageLoad:key');
//             if (value == 'login') {
//                 setLoadingPage('Login');
//             } else {
//                 setLoadingPage('onBoarding');
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }

    
  
   return (
    
    <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator
            
            screenOptions = {
                {
                    ...TransitionPresets.DefaultTransition,
                    headerMode:"screen",
                    
                    headerStyle:{elevation:0}
                    
                    
                    
                }
            
            }
            >
                {/* <Stack.Screen name="OnBoarding" component={OnBoarding} options={({navigation})=> (
                    {
                        headerShown:false
                    }
                )} /> */}
                <Stack.Screen name="Login" component={Login} options={({navigation}) =>({
                headerShown:false
                })} />
             
                 <Stack.Screen name="Register" component={Register} options={({navigation}) =>({
                headerShown:false
                })}
            
                />

                <Stack.Screen name="MainLayout" component={MainLayout} options={({navigation})=> ({
                    headerShown:false
                })}/>

        </Stack.Navigator>
    </NavigationContainer>
    
  )
}


const styles = StyleSheet.create({
 


});

export default Navigation;

