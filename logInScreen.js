import { StatusBar } from "expo-status-bar";
import { Text, TextInput, Button, Image, View, Pressable, ScrollView, Alert } from "react-native";
import styles from './styles';  
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {checkLogin} from './db';

// const initDB = async(db) => {
//     try{
//         await db.execAsync(`
//             PRAGMA journal_mode = WAL;
//             CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, 
//             username TEXT UNIQUE, 
//             passward TEXT
//             );
//             `);
//         console.log('Databse Initilized!')
//     } catch (error) {
//         console.log('Error in initilizing the database!', error);
//     }
// };
const MyButton =({title, onPress}) => {
    return (
     <View style={{marginHorizontal: 60, width: 120, height: 120, marginVertical: 20, marginLeft: 120}}>
        <Button  title={title} color='#6256CA' onPress={onPress} />
      </View>
    )
  };


const LoginScreen = ({navigation}) =>{

   
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const getData = async () => {
        try{
            const value = await AsyncStorage.getItem('username');
            if(value != null){
                navigation.navigate('BUS EXPRESS');
            }
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const logInHandler = async() => {
        if(userName.length === 0 || password.length === 0) {
            Alert.alert('      SOMETHING WENT WRONG!!', 'You must fill up all the fields!');
            return;
        }
        try {
        const isUserValid =  checkLogin(userName, password);
            if(isUserValid){
                await AsyncStorage.setItem('username', userName);
                navigation.navigate('BUS EXPRESS');
            }else{
                Alert.alert("Login failed", "Invalid username or password.")
            }
        }catch (error){
            console.log('ERROR during you log in.', error);
        }
    }
    //main return
    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={{marginLeft: 10, marginVertical: 20 }}>
                <Text style={{fontSize:40, fontWeight: 'bold', marginTop: 50, marginLeft: 40}}>WELCOME TO </Text>
                <Text style={{fontSize:40, fontWeight: 'bold', marginTop: 1}}>TRAVEL EXPRESS</Text>
            </View>
            {/* logo */}
            <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 40, marginTop: 30 }}>
                <Image source={require('./logo.png')} style={styles.logo}/> 
            </View> 

            <View style={{ backgroundColor: '#C1D8C3', width: 360, height: 350, justifyContent: 'center', borderRadius: 50, marginTop: 50}}>
            {/* header */}
            <View style={{marginLeft: 0, marginVertical: 20 }}>
                <Text style={{fontSize:35, fontWeight: 'bold', marginTop: 40, marginLeft: 120}}>LOG IN</Text>
            </View>
            
            <TextInput style={{borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: '#F4F6FF',
                            width: 270,
                            paddingLeft: 20,
                            justifyContent:'center',
                            height: 50,
                            marginLeft: 40,}} placeholder="Username" 
                            value={userName}
                            onChangeText={setUsername}
                            textAlign="start" 
                            placeholderTextColor={"black"} 
                            fontWeight='400' 
                            fontSize={15}/>
            
            <TextInput style={{borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: '#F4F6FF',
                            width: 270,
                            paddingLeft: 20,
                            justifyContent:'center',
                            height: 50,
                            marginLeft: 40,
                            marginTop: 20}} placeholder="Password" 
                            value={password}
                            onChangeText={setPassword}
                            placeholderTextColor={"black"} 
                            fontWeight='400' 
                            secureTextEntry/>
            
            <View style={{flexDirection: 'row'}}>
                <MyButton title="Log In" height={50} 
                onPress={logInHandler}/>
            </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 20, paddingRight: 5, marginTop: -76}}>Doesn't have an Account?</Text>
                    <Pressable onPress={() => navigation.navigate('Sign In')}>
                        <Text style={{color:'blue', fontWeight: 'bold', fontSize: 18, marginTop: -80}}>SIGN UP</Text>
                    </Pressable>
                
                </View>
            </View>
            <StatusBar  backgroundColor='white' style="auto" />
            </ScrollView>
        </View>
       
    );
};
export default LoginScreen;