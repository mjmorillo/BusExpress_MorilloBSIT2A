import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#77CDFF',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    header: {
      paddingTop: 55,
      marginRight: 140,
      fontWeight: 'bold',
      fontSize: 40,
      marginTop: 10,
    },
    searchbox: {
      borderWidth: 2,
      borderRadius: 20,
      backgroundColor: '#F4F6FF',
      width: 250,
      paddingLeft: 20,
      justifyContent:'center',
      height: 45,
      marginLeft: -20,
    },
    // search Button
    searchbutton: {
      marginHorizontal: 15,
      width: 120, 
      color: '#FF6600',
      borderWidth: 2,
      borderRadius: 5,
      borderColor: '#6439FF',
    },
    logo:{
      height: 180,
      width: 350,
      marginLeft: -50,
      marginTop: 20
    },
    options: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginLeft: -30,
      marginTop: 20,
      marginBottom: -10,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    choices: {
      flexDirection: 'row',
      marginHorizontal: -30,
      alignItems: 'center',
  
    },
    checkbox: {
      width: 25,
      height: 25,
      borderWidth: 4,
      borderColor: 'black',
      borderRadius: 5,
    },
    choicedesign: {
      textTransform: 'capitalize',
      fontSize: 18,
      fontWeight: 'bold',
      paddingLeft: 10,
    },
    check: {
      alignSelf: 'center',
      fontSize: 16,
    },
    from: {
      marginLeft: 38,
      marginTop: 10,
      marginBottom: -10,
      fontSize: 25,
      fontWeight: '900'
    },
    slctlocation: {
      borderColor: 'black',
      padding: 10,
      width: 350,
      borderRadius: 10,
      marginLeft: 50,
      marginTop: 20,
      backgroundColor: '#F5F5F7'
    },
    to: {
      marginLeft: 35,
      marginTop: 10,
      marginBottom: -10,
      fontSize: 18,
      fontWeight: '900',
    },
    slctlocation2: {
      borderColor: 'black',
      padding: 10,
      width: 350,
      borderRadius: 10,
      marginLeft: 30,
      marginTop: 20,
      backgroundColor: '#F5F5F7'
    },
    slctlocation3: {
      borderColor: 'black',
      padding: 10,
      width: 250,
      borderRadius: 14,
      backgroundColor: 'white',
      marginRight: -50,
      marginLeft: 90,
      marginTop: -30,
    },
    quantity: {
      marginLeft: 35,
      marginTop: 10,
      marginBottom: -10,
      fontSize: 18,
      fontWeight: '900'
    },
    pquantity: {
      borderColor: 'black',
      padding: 10,
      width: 100,
      borderRadius: 10,
      marginLeft: 40,
      marginTop: 20,
      backgroundColor: '#F5F5F7',
    },
    seatchoice:{
      flexDirection: 'row',
      marginLeft: 200,
      marginTop: -82,
      marginBottom: -10,
      fontSize: 18,
      fontWeight: '900',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    seatnum: {
      borderColor: 'black',
      flexDirection: 'row',
      padding: 10,
      width: 100,
      borderRadius: 10,
      marginLeft: 210,
      marginTop: 20,
      backgroundColor: '#F5F5F7',
    },
    findbutton: {
      marginVertical: 20,
      width: 200, 
      color: '#FF6600',
      marginRight: 50,
      borderWidth: 3,
      borderRadius: 5,
      borderColor: '#6256CA',
      
    },
    // for selecting location
    pickerInput: {
      width: 300,
      height: 55,
      backgroundColor: 'white',
      marginLeft: 10,
      marginRight: -4,
      borderColor: 'yellow',
      borderWidth: 20,
      borderRadius: 5,
    },
    pickerInput_1:{
      width: 300,
      height: 55,
      backgroundColor: 'white',
      marginLeft: 10,
      marginRight: -40,
      marginTop: -30,
      borderColor: 'yellow',
      borderWidth: 20,
    },
    bustypeChoice: {
      width: 260,
      height: 50,
      backgroundColor: 'white',
      marginLeft: 90,
      marginTop: -30,
    },
    pickerInputPage2:{
      width: 310,
      backgroundColor: 'white',
    },
    setQuantity:{
      textAlign: 'center',
      height: 40,
      width: 100,
      marginTop: -20,
      marginRight: -40,
      backgroundColor: 'white',
      borderRadius: 20,
  
    },
    fareContainer:{
      textAlign: 'center',
      height: 40,
      width: 55,
      backgroundColor: 'white',
      borderRadius: 20,
    },
  });

  export default styles;