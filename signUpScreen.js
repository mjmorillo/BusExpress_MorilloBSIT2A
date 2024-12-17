import { StatusBar } from "expo-status-bar";
import { Text, TextInput, Button, Image, View, Pressable, ScrollView, Alert } from "react-native";
import styles from './styles';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import {insertNewAcc} from './db';


const MyButton =({title, onPress}) => {
    return (
     <View style={{marginHorizontal: 60, width: 120, height: 120, marginVertical: 20, marginLeft: 120}}>
        <Button  title={title} color='#6256CA' onPress={onPress} />
      </View>
    )
  };

const AdminButton =({title, onPress}) => {
    return (
     <View style={{marginHorizontal: 90, width: 120, height: 120, marginVertical: 40, marginLeft: 30}}>
        <Button  title={title} color='#6256CA' onPress={onPress} />
      </View>
    )
  };

  const SignUpScreen = ({navigation}) =>{

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setconfirmPass] = useState('');
    const [accID, setAccID] = useState('');

    //Function to handle the sign up form
    const signupHandler = async() => {
            //check if the user enter a value before clicking the button
        if (userName.length === 0 || password.length === 0 || confirmPass.length === 0) { 
            Alert.alert('      SOMETHING WENT WRONG!!', 'You must fill up all the fields!');
            return;
        }
        if (password !== confirmPass){ //check if the password match to submitted password
            Alert.alert('ERROR!!', 'Confirm Password not match');
            return;
        }
        try {   //function if the username is already exist
            
            // const userExist = await db.getAllAsync('SELECT * FROM users WHERE username = ?', [userName]);
            // if (userExist){
            //     //display an alert error if the username is already exist
            //     Alert.alert('Opps, ERROR', 'Username has alraedy exist.(TRY AGAIN!)');  
            //     return;
            // }
            // if(password.length < 5){
            //     //displaying an error when the user input a password that less than 5 letters
            //     Alert.alert('Error', 'Password must contain at least 5 letters');
            //     return;
            // }
            const id = await insertNewAcc(userName, password);
            setAccID(id);
            console.log('Account created with ID:', id);
            console.log('Username:', userName, 'Password', password);
            navigation.navigate('BUS EXPRESS', {user : userName}); // navigate to the home page
        }catch (error){
            console.log('ERROR!! during registration.', error); 
        }
    }
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

            <View style={{ backgroundColor: '#C1D8C3', width: 360, height: 390, justifyContent: 'center', borderRadius: 50, marginTop: 50}}>
            {/* header */}
            <View style={{marginLeft: 0, marginVertical: 20 }}>
                <Text style={{fontSize:35, fontWeight: 'bold', marginTop: 40, marginLeft: 110}}>SIGN IN</Text>
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
                            fontWeight='400' font 
                            secureTextEntry/>

            <TextInput style={{borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: '#F4F6FF',
                            width: 270,
                            paddingLeft: 20,
                            justifyContent:'center',
                            height: 50,
                            marginLeft: 40,
                            marginTop: 20}} placeholder="Confirm Password" 
                            value={confirmPass}
                            onChangeText={setconfirmPass}
                            placeholderTextColor={"black"} 
                            fontWeight='400' font 
                            secureTextEntry/>
            
            <View style={{flexDirection: 'row'}}>
                <MyButton title="Sign In" height={50} 
                onPress={signupHandler}/>
            </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 30, paddingRight: 5, marginTop: -80}}>Already have an account?</Text>
                    <Pressable onPress={() => navigation.navigate('Log In')}>
                        <Text style={{color:'blue', fontWeight: 'bold', fontSize: 18, marginTop: -83}}>LOG IN</Text>
                    </Pressable>
                </View>
            </View>
                <View style={{flexDirection: 'row'}}>
                    <AdminButton title="Go to Admin" height={10} marginVertical={20}
                    onPress={() => navigation.navigate('Admin Form')}/>
                </View>
            <StatusBar  backgroundColor='white' style="auto" />
            </ScrollView>
        </View>
       
    );
};
export default SignUpScreen;