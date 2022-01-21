import React from 'react'
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{display:'flex',flexDirection:'column',marginTop:20,alignItems:'center'}}>
              <Text style={{fontSize:24,fontWeight:'bold',color:'#000'}}>Hello Again!</Text>
              <View style={{ width:'45%',height:70,display:'flex',alignItems:'center'}}>
                <Text style={{fontSize:18,textAlign:'center'}}>Welcome back you've been missed</Text>
              </View> 
          </View>
          <View style={styles.inputContainer}>
          <TextInput
              placeholder="Email Address"
              style={styles.input}
              
            />
          </View>
          <View style={styles.inputContainer}>
          <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry={false}
            />
          </View>
          <TouchableOpacity style={styles.btnPrimary}
            
          >
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff'
  },
  inputContainer : {
    flexDirection:'row',
    marginTop:20,
    marginHorizontal:25,
    borderRadius:15,
    backgroundColor:'#F4F6F8'

  },
  btnPrimary: {
    backgroundColor: COLORS.darkBlue,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal:25
  },
  input: {
    color: COLORS.gray,
    paddingLeft: 30,
   
    flex: 1,
    fontSize: 18,
  }
});

export default Login
