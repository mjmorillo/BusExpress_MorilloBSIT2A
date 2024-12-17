import React, { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from './styles';

const MyButton =({title, onPress}) => {
    return (
     <View style={{marginHorizontal: 60, width: 120, height: 120, marginVertical: 20, marginLeft: 120}}>
        <Button  title={title} color='#6256CA' onPress={onPress} />
      </View>
    )
  };

const AdminForm = ({navigation}) => {

    const [useradmin, setUserAdmin] = useState('');
    const [userpass, setUserPass] = useState('');

    const handleSubmit = () => {
        if(useradmin === '' || userpass === ''){
             Alert.alert('      SOMETHING WENT WRONG!!', 'You must fill up all the fields!');
             return;
        }
        if (useradmin === 'admin' && userpass === 'admin123'){
             Alert.alert('SUCCESS!', 'Log in Successfully!');
             navigation.navigate('Admin');
             return;
        }
        Alert.alert('ERROR!', 'Invalid username or password.')
        // catch (error){
        //     console.log('ERROR!! during registration.', error); 
        // }
    }
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{marginLeft: 10, marginVertical: 20 }}>
                <Text style={{fontSize:40, fontWeight: 'bold', marginTop: 5, marginLeft: 40}}>WELCOME TO </Text>
                <Text style={{fontSize:40, fontWeight: 'bold', marginTop: 1, marginLeft: 37}}>ADMIN PAGE!</Text>
            </View>
            {/* logo */}
            <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 40, marginTop: 20 }}>
                <Image source={require('./logo.png')} style={styles.logo}/> 
            </View> 

            <View style={{ backgroundColor: '#C1D8C3', width: 360, height: 360, justifyContent: 'center', borderRadius: 50, marginTop: 50}}>
            {/* header */}
                <View style={{marginLeft: 0, marginVertical: 20 }}>
                    <Text style={{fontSize:33, fontWeight: 'bold', marginTop: 80, marginLeft: 120}}>LOG IN</Text>
                    <Text style={{fontSize:33, fontWeight: 'bold', marginTop: 1, marginLeft: 155}}>AS</Text>
                    <Text style={{fontSize:33, fontWeight: 'bold', marginTop: 1, marginLeft: 120}}>ADMIN</Text>
                </View>
            
                <TextInput style={{borderWidth: 1,
                                borderRadius: 10,
                                backgroundColor: '#F4F6FF',
                                width: 270,
                                paddingLeft: 20,
                                justifyContent:'center',
                                height: 50,
                                marginLeft: 40,}} placeholder="Admin Username"
                                onChangeText={setUserAdmin}
                                value={useradmin} 
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
                                marginTop: 20}} placeholder="Admin Password"
                                value={userpass}
                                onChangeText={setUserPass} 
                                placeholderTextColor={"black"} 
                                fontWeight='400' 
                                secureTextEntry/>
                
                <View style={{flexDirection: 'row'}}>
                    <MyButton title="Log In" height={50} 
                    onPress={handleSubmit}
                     />
                </View>
            </View>
            <StatusBar  backgroundColor='white' style="auto" />
            </ScrollView>
        </View>
    );
};

export default AdminForm;