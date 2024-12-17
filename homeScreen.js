import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Picker from 'react-native-picker-select';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';
import BusSummaryScreen from './busSummary';
import BusBooked from './busBooked';
import LoginScreen from './logInScreen';
import SignUpScreen from './signUpScreen';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {bookRecords} from './db';

 
//For Find Button
const FindButton =({title, onPress}) => {
    return (
     <View style={styles.findbutton}>
        <Button  title={title} color='#6256CA' onPress={onPress} />
      </View>
    )
  };

const MyButton =({title, onPress}) => {
    return (
     <View style={{marginHorizontal: 60, width: 120, height: 120, marginVertical: 10}}>
        <Button  title={title} color='#6256CA' onPress={onPress} />
      </View>
    )
  };
  
  const HomeScreen = ({ navigation}) => {

  const logOut = async () => {
      try{
        await AsyncStorage.removeItem('username');
        await AsyncStorage.removeItem('account_id');
        navigation.navigate('Log In');
      }catch(error){
        console.log(error);
      }
    }

    // const [choices, setchoice] = useState([]);
    // const Myoptions = ["One Way Trip", "Round Trip"];
    const [selectedValueFrom, setSelectedValueFrom] = useState(null); // for dropdown select value
    const [selectedValueTo, setSelectedValueTo] = useState(null); // for dropdown select value
    const [selectedBusType, setSelectedBusType]= useState(null); // for dropdown type of bus select value
    const [selectedDate, setSelectedDate] = useState(''); //for date of booking
    const [selectedPassQtty, setSelectedPassQtty] = useState(''); // quantity of passenger
    const [selectedFare, setSelectedFare] = useState(''); // fare of passenger
    const [username, setUsername] = useState('');

    useEffect(() => {
      getData();
    });

    const getData = () => {
      try{
        AsyncStorage.getItem('username')
          .then(value => {
            if(value != null){
              setUsername(value);
            }
          })
      }catch(error){
        console.log(error)
      }
    }

    const bookingHandler = async() => {
      if (selectedValueFrom.length === 0 || 
          selectedValueTo.length === 0 || 
          selectedBusType.length === 0 || 
          selectedDate.length === 0 ||
          selectedPassQtty.length === 0 || 
          selectedFare.length === 0) {
            Alert.alert('      SOMETHING WENT WRONG!!', 'You must fill up all the fields!');
            return;
          }
          try {
            const isBookValid = bookRecords(selectedValueFrom, selectedValueTo, selectedBusType, selectedDate, selectedPassQtty, selectedFare);
            if(isBookValid){
              navigation.navigate('Summary');
            }else{
               Alert.alert("Booking failed", "Invalid inputs.")
            }
          }catch(error){
            console.log('ERROR!! during booking trip', error);
            Alert.alert("Booking failed", "An unexpected error occurred.");
          }
    }

  // for dropdown select placeholder
  const placeholder = {
    label : 'Select Location:',
    value : null,
  };
  const placeholder2 = {
    label : 'Select Bus Type:',
    value : null,
  }
  
  // dropdown select options
  const FromLocOptions = [
    { label: 'Manila', value: 'manila' },
    { label: 'Legazpi', value: 'legazpi' },
    { label: 'Naga', value: 'naga' },
    { label: 'Baguio', value: 'baguio' },
    { label: 'Quezon City', value: 'quezon' },
  ];
  const ToLocOptions = [
    { label: 'Manila', value: 'manila' },
    { label: 'Legazpi', value: 'legazpi' },
    { label: 'Naga', value: 'naga' },
    { label: 'Baguio', value: 'baguio' },
    { label: 'Quezon City', value: 'quezon' },
  ];
  const busType = [
    {label: 'Ordinary', value: 'ordinary'},
    {label: 'Air Condition', value: 'aircon'},
  ];
  
  // main return
  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'center', marginLeft: -10}}>
        <Text style={styles.header}>BUS EXPRESS</Text>
      </View>      
      {/* logo */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('./logo.png')} style={styles.logo}/> 
        </View>
      
        <View style={{flexDirection: 'row', justifyContent: 'center', marginLeft: -10}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: -30}}>WELCOME {username}!</Text>
        </View>
  
    {/* select location */}
    <View style={{marginVertical:10, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{ margin: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{ marginTop: 10, 
                        marginLeft: -60, 
                        marginRight: -5, 
                        textAlign: 'right', 
                        width: 60, 
                        paddingRight: 5, 
                        fontWeight: 'bold', 
                        fontSize: 18}}>From: 
          </Text>
  
          {/* from */}
            <Picker
                placeholder={placeholder}
                items={FromLocOptions}
                onValueChange={(value) => setSelectedValueFrom(value)}
                // onChangeText={setSelectedValueFrom}
                value={selectedValueFrom}
                style={{inputAndroid: styles.pickerInput}}/>
        </View>
  
      <View style={{  margin: 20,flexDirection: 'row',alignItems: 'center', justifyContent: 'center', marginLeft: 20}}>
        <Text style={{ marginTop: -20, 
                      marginLeft: -135, 
                      marginRight: -5,
                      paddingRight: 10,
                      textAlign: 'right', 
                      width: 98, 
                      fontWeight: 'bold', 
                      fontSize: 19,}}>To: 
          </Text>
                  
          {/* to */}
              <Picker
                placeholder={placeholder}
                items={ToLocOptions}
                onValueChange={(value) => setSelectedValueTo(value)}
                // onChangeText ={setSelectedValueTo}
                value={selectedValueTo}
                style={{inputAndroid: styles.pickerInput_1}}/>
      </View>
  
      {/*selecting type of bus */}
        <View style={{  margin: 20,flexDirection: 'row',alignItems: 'center', justifyContent: 'center', marginLeft: 20}}>
          <Text style={{ marginTop: -25, 
                          marginRight: -80, 
                          textAlign: 'left', 
                          width: 100, 
                          fontWeight: 'bold', 
                          fontSize: 19, 
                          marginLeft: -60}}>Bus Type: 
            </Text>
                <Picker
                  placeholder={placeholder2}
                  items={busType}
                  onValueChange={(value) => setSelectedBusType(value)}
                  value={selectedBusType}
                  style={{inputAndroid: styles.bustypeChoice}}/>
        </View>
  
      {/*selecting of date */}
        <View style={{margin: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginLeft: 20}}>
          <Text style={{marginRight: -80, 
                        marginLeft: -80,
                        // paddingRight: -40, 
                        marginTop: -20,
                        width: 80, 
                        fontSize: 18, 
                        fontWeight: 'bold'}}>Date:
            </Text>
          <TextInput style={styles.slctlocation3} 
                        placeholder='00/00/0000' 
                        placeholderTextColor="black" 
                        textAlign='center'  
                        fontSize={16}
                        onChangeText={setSelectedDate}
                        value={selectedDate}/>
        </View>
  
        {/*passenger quantity */}
          <View> 
            <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'center', marginRight: 230,  marginVertical: 20}}>
              <Text style={{marginRight: 20, 
                            marginLeft: 10, 
                            marginTop: -30, 
                            width: 200, 
                            textAlign: 'right', 
                            fontWeight: 'bold', 
                            fontSize: 17}}>Passenger Quantity:</Text>
                <TextInput style={styles.setQuantity}
                          keyboardType="numeric"
                          onChangeText={setSelectedPassQtty}
                          value={selectedPassQtty}
                          placeholder='0'/>
            </View>
          </View>
        {/*passenger fare */}
          <View> 
            <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'center', marginRight: 230,  marginVertical: 20}}>
            <Text style={{marginRight: 20, 
                          marginLeft: -30, 
                          marginTop: -30, 
                          width: 200, 
                          textAlign: 'right', 
                          fontWeight: 'bold', 
                          fontSize: 17}}>Passenger's Fare:</Text>
              <TextInput style={styles.setQuantity} 
                      value={selectedFare}
                      keyboardType="numeric"
                      onChangeText={setSelectedFare}
                      placeholder='0'/>
            </View>
          </View>
      {/* button */}
        <View>
            <FindButton title="BOOK NOW" height={70} 
            onPress={bookingHandler}/>
          </View>
  
      {/* Log out button */}
       <View style={{alignItems:'flex-end', marginLeft: 200}}>
        <MyButton title="Log Out" height={50} 
          onPress={logOut}/>
      </View>
              
    {/* dropdown select container end */}
    </View>
    </ScrollView>  
      <StatusBar backgroundColor='white' style="auto" />
    </View>
    ); 
  }; 

export default HomeScreen;