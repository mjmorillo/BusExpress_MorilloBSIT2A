import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';  

const MySearchButton = ({title, onPress}) =>{
    return (
      <View style={styles.searchbutton}>
        <Button title={title} color='#6439FF' onPress={onPress}/>
      </View>
    )
   };

const MyFindButton =({title, onPress}) => {
    return (
     <View style={styles.findbutton}>
        <Button  title={title} color='#6256CA' onPress={onPress} />
      </View>
    )
  };

 const MyButton =({title, onPress}) => {
    return (
     <View style={{marginHorizontal: 30, width: 130, height: 170, marginVertical: 20}}>
        <Button  title={title} color='#6256CA' onPress={onPress} />
      </View>
    )
  };

const BusSummaryScreen = ({ navigation }) => {
const [selectedValueFrom, setSelectedValueFrom] = React.useState(null); // for dropdown select value
const [selectedValueTo, setSelectedValueTo] = React.useState(null); // for dropdown select value
const [number, onChangeNumber] = React.useState(''); // passenger for quantity
  
  
// check box
// function pickOption(TripChoice){
//     if(choices.includes(TripChoice)){
//         setchoice(choices.filter(Trip=> Trip !== TripChoice))
//         return;
//     }
//     setchoice(Trip=>Trip.concat(TripChoice))
//     }
    // for dropdown select placeholder
//     const placeholder = {
//       label : 'Select Location',
//       value : null,
//     };
  
//  // dropdown select options
//     const FromLocOptions = [
//       { label: 'Polangui', value: 'polangui' },
//       { label: 'Legazpi', value: 'legazpi' },
//       { label: 'Naga', value: 'naga' },
//     ];
//     const ToLocOptions = [
//       { label: 'Polangui', value: 'polangui' },
//       { label: 'Legazpi', value: 'legazpi' },
//       { label: 'Naga', value: 'naga' },
//     ];
  
 // main return
    return (
      <View style={styles.container}>
  
            {/* header */}
            <View style={{marginRight: 200, marginVertical: 20, marginRight: 1 }}>
            <Text style={{fontSize:30, fontWeight: 'bold', marginTop: 20}}>BUS EXPRESS</Text>
            </View>
            
            {/* logo */}
            <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 50}}>
                <Image source={require('./logo.png')} style={styles.logo}/> 
            </View>  
            
            <View style={{ backgroundColor: '#C1D8C3', width: 380, height: 400, justifyContent: 'center', borderRadius: 50}}>
            <View style={{marginBottom: 10, alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: -20}}>Booking Summary</Text>
            </View>
        
            {/* for checkboxes */}
            {/* <View style={styles.options}>
            {
            Myoptions.map(option=>
            <View key={option} style={styles.choices}>
            <TouchableOpacity style={styles.checkbox} onPress={()=> pickOption(option)}>
                {choices.includes(option) && <Text style={styles.check}>✔</Text>}
            </TouchableOpacity>
            <Text style={styles.choicedesign}>{option}</Text>
            </View>)
            }
            </View> */}
            <View>
            <Text style={{marginLeft: 20, marginTop: 30, fontWeight:'bold'}}>Trip Choice: </Text>
            </View>
            <View>
            <Text style={{marginLeft: 20, marginTop: 30, fontWeight:'bold'}}>From:</Text>
            </View>
            <View>
            <Text style={{marginLeft: 20, marginTop: 30, fontWeight:'bold'}}>To:</Text>
            </View>
            <View>
            <Text style={{marginLeft: 20, marginTop: 30, fontWeight:'bold'}}>Bus Type Choice:</Text>
            </View>
            <View>
            <Text style={{marginLeft: 20, marginTop: 30, fontWeight:'bold'}}>Quantity:</Text>
            </View>
            <View>
            <Text style={{marginLeft: 20, marginTop: 30, fontWeight:'bold'}}>Fare:</Text>
            </View>
        </View>
        {/* buttons */}
        <View style={{flexDirection: 'row'}}>
                <MyButton title="BOOK NOW!" height={50} 
                    onPress={() => navigation.navigate('Booked')}/>
            </View>
            <StatusBar  backgroundColor='white' style="auto" />
      </View>
    );
  };
  
  export default BusSummaryScreen;