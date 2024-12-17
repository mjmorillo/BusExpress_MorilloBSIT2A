import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';  

const MyButton =({title, onPress}) => {
    return (
        <View style={{marginHorizontal: 30, width: 140, height: 120, marginVertical: 10}}>
            <Button  title={title} color='#6256CA' onPress={onPress} />
        </View>
    )
  };

const BusBooked = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={{marginRight: -10, marginVertical: 20}}>
                <Text style={{fontSize:30, fontWeight: 'bold'}}>Bus Express</Text>
            </View>

            {/* logo */}
            <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 50}}>
                <Image source={require('./logo.png')} style={styles.logo}/> 
            </View> 

             {/* for container */}
            <View style={{height:400, width: 390, backgroundColor: '#C1D8C3', justifyContent: 'center', alignItems: 'center', borderRadius: 40, marginTop: 20}}>
                <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 30, marginTop: -100}}>
                    <Icon name="check-circle" size={90} color="blue" />
                </View> 
                <Text style={{fontSize:25, fontWeight: 'bold', marginTop: '40'}}> BOOKED SUCCESSFULLY!!</Text>
                <View>
                    <Text style={{marginHorizontal: 10, textAlign: 'auto', marginTop: 30 }}>
                    Thank you for choosing Bus Express, We are guarantee to you that you will be  feel comfortable on your trip. GOD BLESS YOUR TRIP.
                    </Text>
                </View>
            </View>
            {/* <MyButton title="Back to Home" height={50} 
              onPress={() => navigation.navigate('BUS EXPRESS')}/> */}
        </View>
        
    );
}

export default BusBooked;