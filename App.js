import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Picker from 'react-native-picker-select';
import styles from './styles';
import HomeScreen from './homeScreen';
import BusSummaryScreen from './busSummary';
import BusBooked from './busBooked';
import LoginScreen from './logInScreen';
import SignUpScreen from './signUpScreen';
import AdminForm from './adminForm';
import AdminScreen from './adminScreen';
import {initializeDB} from './db';




// const SearchButton = ({title, onPress}) =>{
//   return (
//     <View style={styles.searchbutton}>
//       <Button title={title} color='#6439FF' onPress={onPress}/>
//     </View>
//   )
//  };
 
//For Find Button
// const FindButton =({title, onPress}) => {
//   return (
//    <View style={styles.findbutton}>
//       <Button  title={title} color='#6256CA' onPress={onPress} />
//     </View>
//   )
// };

// const MyButton =({title, onPress}) => {
//     return (
//      <View style={{marginHorizontal: 60, width: 120, height: 120, marginVertical: 10}}>
//         <Button  title={title} color='#6256CA' onPress={onPress} />
//       </View>
//     )
//   };

// const HomeScreen = ({ navigation, route }) => {

//   const { user } = route.params;


//   const [choices, setchoice] = useState([]);
//   const Myoptions = ["One Way Trip", "Round Trip"];
//   const [selectedValueFrom, setSelectedValueFrom] = React.useState(null); // for dropdown select value
//   const [selectedValueTo, setSelectedValueTo] = React.useState(null); // for dropdown select value
//   const [selectedBusType, setSelectedBusType]= React.useState(null);
//   const [number, onChangeNumber] = React.useState(''); // quantity of passenger
//   const [number1, onChangeFare] = React.useState(''); // fare of passenger

// // check box
// function pickOption(TripChoice){
//   if(choices.includes(TripChoice)){
//     setchoice(choices.filter(Trip=> Trip !== TripChoice))
//     return;
//   }
//   setchoice(Trip=>Trip.concat(TripChoice))
//   }


// // for dropdown select placeholder
// const placeholder = {
//   label : 'Select Location:',
//   value : null,
// };
// const placeholder2 = {
//   label : 'Select Bus Type:',
//   value : null,
// }

// // dropdown select options
// const FromLocOptions = [
//   { label: 'Manila', value: 'manila' },
//   { label: 'Legazpi', value: 'legazpi' },
//   { label: 'Naga', value: 'naga' },
//   { label: 'Baguio', value: 'baguio' },
//   { label: 'Quezon City', value: 'quezon' },
// ];
// const ToLocOptions = [
//   { label: 'Manila', value: 'manila' },
//   { label: 'Legazpi', value: 'legazpi' },
//   { label: 'Naga', value: 'naga' },
//   { label: 'Baguio', value: 'baguio' },
//   { label: 'Quezon City', value: 'quezon' },
// ];
// const busType = [
//   {label: 'Ordinary', value: 'ordinary'},
//   {label: 'Air Condition', value: 'aircon'},
// ];

// // main return
// return (
//   <View style={styles.container}>
//   <ScrollView>
//     <View style={{flexDirection: 'row', justifyContent: 'center', marginLeft: -10}}>
//       <Text style={styles.header}>BUS EXPRESS</Text>
//     </View>
//     {/* search bar*/}
//     <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 40, marginTop: 20,}}>
//       <TextInput style={styles.searchbox} placeholder='Find Bus..' placeholderTextColor={"black"} fontWeight='500' fontSize={18}/>
//       <SearchButton title="Search Bus"/>
//     </View>

    
//     {/* logo */}
//       <View style={{justifyContent: 'center', alignItems: 'center'}}>
//       <Image source={require('./logo.png')} style={styles.logo}/> 
//       </View>
    
//       <View style={{flexDirection: 'row', justifyContent: 'center', marginLeft: -10}}>
//         <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: -30}}>WELCOME {user}!</Text>
//       </View>

//     {/* for checkboxes */}
//   <View style={styles.options}>
//     {
//       Myoptions.map(option=>
//       <View key={option} style={styles.choices}>
//         <TouchableOpacity style={styles.checkbox} onPress={()=> pickOption(option)}>
//           {choices.includes(option) && <Text style={styles.check}>✔</Text>}
//         </TouchableOpacity>
//         <Text style={styles.choicedesign}>{option}</Text>
//       </View>)
//     }
//   </View>


//   {/* select location */}
//   <View style={{marginVertical:10, alignItems: 'center', justifyContent: 'center'}}>
//       <View style={{ margin: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
//         <Text style={{ marginTop: 10, 
//                       marginLeft: -60, 
//                       marginRight: -5, 
//                       textAlign: 'right', 
//                       width: 60, 
//                       paddingRight: 5, 
//                       fontWeight: 'bold', 
//                       fontSize: 18}}>From: 
//         </Text>

//         {/* from */}
//           <Picker
//               placeholder={placeholder}
//               items={FromLocOptions}
//               onValueChange={(value) => setSelectedValueFrom(value)}
//               value={selectedValueFrom}
//               style={{inputAndroid: styles.pickerInput}}/>
//       </View>

//     <View style={{  margin: 20,flexDirection: 'row',alignItems: 'center', justifyContent: 'center', marginLeft: 20}}>
//       <Text style={{ marginTop: -20, 
//                     marginLeft: -135, 
//                     marginRight: -5,
//                     paddingRight: 10,
//                     textAlign: 'right', 
//                     width: 98, 
//                     fontWeight: 'bold', 
//                     fontSize: 19,}}>To: 
//         </Text>
                
//         {/* to */}
//             <Picker
//               placeholder={placeholder}
//               items={ToLocOptions}
//               onValueChange={(value) => setSelectedValueTo(value)}
//               value={selectedValueTo}
//               style={{inputAndroid: styles.pickerInput_1}}/>
//     </View>

//     {/*selecting type of bus */}
//       <View style={{  margin: 20,flexDirection: 'row',alignItems: 'center', justifyContent: 'center', marginLeft: 20}}>
//         <Text style={{ marginTop: -25, 
//                         marginRight: -80, 
//                         textAlign: 'left', 
//                         width: 100, 
//                         fontWeight: 'bold', 
//                         fontSize: 19, 
//                         marginLeft: -60}}>Bus Type: 
//           </Text>
//               <Picker
//                 placeholder={placeholder2}
//                 items={busType}
//                 onValueChange={(value) => setSelectedBusType(value)}
//                 value={setSelectedBusType}
//                 style={{inputAndroid: styles.bustypeChoice}}/>
//       </View>

//     {/*selecting of date */}
//       <View style={{margin: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginLeft: 20}}>
//         <Text style={{marginRight: -80, 
//                       marginLeft: -80,
//                       // paddingRight: -40, 
//                       marginTop: -20,
//                       width: 80, 
//                       fontSize: 18, 
//                       fontWeight: 'bold'}}>Date:
//           </Text>
//         <TextInput style={styles.slctlocation3} placeholder='00/00/0000' placeholderTextColor="black" textAlign='center'  fontSize={16}/>
//       </View>

//       {/*passenger quantity */}
//         <View> 
//           <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'center', marginRight: 230,  marginVertical: 20}}>
//             <Text style={{marginRight: 20, 
//                           marginLeft: 10, 
//                           marginTop: -30, 
//                           width: 200, 
//                           textAlign: 'right', 
//                           fontWeight: 'bold', 
//                           fontSize: 17}}>Passenger Quantity:</Text>
//               <TextInput style={styles.setQuantity} 
//                         value={number}
//                         keyboardType="numeric"
//                         onChangeText={onChangeNumber}
//                         placeholder='0'/>
//           </View>
//         </View>
//       {/*passenger fare */}
//         <View> 
//           <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'center', marginRight: 230,  marginVertical: 20}}>
//           <Text style={{marginRight: 20, 
//                         marginLeft: -30, 
//                         marginTop: -30, 
//                         width: 200, 
//                         textAlign: 'right', 
//                         fontWeight: 'bold', 
//                         fontSize: 17}}>Passenger's Fare:</Text>
//             <TextInput style={styles.setQuantity} 
//                     value={number1}
//                     keyboardType="numeric"
//                     onChangeText={onChangeFare}
//                     placeholder='0'/>
//           </View>
//         </View>
//     {/* button */}
//       <View>
//           <FindButton title="FIND BUS" height={70} 
//           onPress={() => navigation.navigate('Summary')}/>
//         </View>

//     {/* Log out button */}
//      <View style={{alignItems:'flex-end', marginLeft: 200}}>
//       <MyButton title="Log Out" height={50} 
//         onPress={() => navigation.navigate('Log In')}/>
//     </View>
            
//   {/* dropdown select container end */}
//   </View>
//   </ScrollView>  
//     <StatusBar backgroundColor='white' style="auto" />
//   </View>
//   ); 
// };  

// stacks
const Stack = createNativeStackNavigator();


function App() {
  useEffect(() => {
    const setUpDataBase = async () => {
      try{
        await initializeDB();
      }catch(error){

      }
    };
    setUpDataBase();

  });
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Log In'>
          {/* for admin form navigation bar */}
          <Stack.Screen 
              name="Admin Form"
              component={AdminForm}
              options={{headerShown : true, headerStyle: {backgroundColor: '#C6E7FF'}, 
              headerTintColor: 'black', headerTitleAlign: "left", headerBackVisible: true
              }} 
            />
          {/* for admin screen navigation bar */}
          <Stack.Screen 
              name="Admin"
              component={AdminScreen}
              options={{headerShown : true, headerStyle: {backgroundColor: '#C6E7FF'}, 
              headerTintColor: 'black', headerTitleAlign: "left", headerBackVisible: true
              }} 
            />

          {/* for sign up screen navigation bar */}
          <Stack.Screen 
              name="Sign In"
              component={SignUpScreen}
              options={{headerShown : false, headerStyle: {backgroundColor: '#C6E7FF'}, 
              headerTintColor: 'black', headerTitleAlign: "left", headerBackVisible: false
              }} 
            />

          {/* for login screen navigation bar */}
            <Stack.Screen 
              name="Log In"
              component={LoginScreen}
              options={{headerShown : false, headerStyle: {backgroundColor: '#C6E7FF'}, 
              headerTintColor: 'black', headerTitleAlign: "left", headerBackVisible: false
              }} 
            />

          {/* for home screen navigation bar */}
            <Stack.Screen 
              name="BUS EXPRESS" 
              component={HomeScreen} 
              options={{headerShown : false, headerStyle: {backgroundColor: '#C6E7FF'}, 
              headerTintColor: 'black', headerTitleAlign: "left", headerBackVisible: false
              }}/>

          {/* for summary screen navigation bar */}
            <Stack.Screen 
              name="Summary" 
              component={BusSummaryScreen} 
              options={{headerShown : true, headerStyle: {backgroundColor: '#C6E7FF'}, 
              headerTintColor: 'black', headerTitleAlign: "center",
              headerBackVisible: true,
              }} /> 

          {/* for booked screen navigation bar */}
          <Stack.Screen 
              name="Booked" 
              component={BusBooked} 
              options={{headerShown : true, headerStyle: {backgroundColor: '#C6E7FF'}, 
              headerTintColor: 'black', headerTitleAlign: "center"}} /> 
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
