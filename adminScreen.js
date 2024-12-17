import React, { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

const MyButton =({title, onPress}) => {
    return (
     <View style={{marginHorizontal: 60, width: 120, height: 120, marginVertical: 20, marginLeft: 120}}>
        <Button  title={title} color='#6256CA' onPress={onPress} />
      </View>
    )
  };

const AdminScreen = () => {
    
    //main return
    return(
        <View style={styles.container}>
            <View style={{marginLeft: 10, marginVertical: 20 }}>
                    <Text style={{fontSize:40, fontWeight: 'bold', marginTop: 10, marginLeft: 6}}>WELCOME</Text>
                    <Text style={{fontSize:40, fontWeight: 'bold', marginTop: 1, marginLeft: 25}}>ADMIN!!</Text>
            </View>

            {/* logo */}
            <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 40, marginTop: 10 }}>
                <Image source={require('./logo.png')} style={styles.logo}/> 
            </View> 

            <View style={{ backgroundColor: '#C1D8C3', 
                           width: 360, 
                           height: 350, 
                           justifyContent: 'center', 
                           borderRadius: 50, 
                           marginTop: 50}}>
                <TextInput style={{borderWidth: 1,
                                  borderRadius: 10,
                                  backgroundColor: '#F4F6FF',
                                  width: 270,
                                  paddingLeft: 20,
                                  justifyContent:'center',
                                  height: 50,
                                  marginLeft: 40,}} placeholder="Input you want to do" 
                                  textAlign="start" 
                                  placeholderTextColor={"black"} 
                                  fontWeight='400' 
                                  fontSize={15}/>

                <View style={{flexDirection: 'row'}}>
                    <MyButton title="Delete" height={50} 
                    />
                </View>

            </View>



        </View> 
    );
}; 
export default AdminScreen;
