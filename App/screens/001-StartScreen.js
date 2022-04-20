import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


const screen = Dimensions.get('window');


  

export default function App({navigation , route={} }) {

  const [showLoginMethods , setshowLoginMethods ] = useState(1);

  return (
    <View style={styles.mainView}>

            <View style={styles.row}>
                <View >
                    <Image source={require('../assets/Screen-1/achievements_accomplishment.png')} resizeMode="contain" />
                    <Image source={require('../assets/Screen-1/Burst-circle-1.png')} style={{position:'absolute', marginTop:150}} resizeMode="contain" />
                </View>
                
                <Image source={require('../assets/Screen-1/finance_savings.png')} resizeMode="contain" />
            </View>
            
            <Image style={styles.fundget} source={require('../assets/Screen-1/fundget.png')} resizeMode="contain" />

            <View style={styles.row} >
                <Image source={require('../assets/Screen-1/security_lock.png')} resizeMode="contain" />
                <Image source={require('../assets/Screen-1/transport_delivery.png')} resizeMode="contain" />
            </View>

            {
                showLoginMethods?
                <View >
                    <TouchableOpacity style={{width:298 , alignSelf:"center" }} onPress={()=>{navigation.push("Home")}} >
                        <Image style={styles.google_or_other} source={require('../assets/Screen-1/Group1.png')} resizeMode="contain" />
                    </TouchableOpacity>

                    <Image style={styles.google_or_other} source={require('../assets/Screen-1/or.png')} resizeMode="contain" />

                    <TouchableOpacity style={{width:160 , alignSelf:"center" }} >
                        <Image style={styles.google_or_other} source={require('../assets/Screen-1/continue_with_other.png')} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
                :
                <View/>
            }

    </View>
  );
}





const styles = StyleSheet.create({

    mainView:{
        backgroundColor:'#E5E5E5',
        flex:1,
        justifyContent:"center",
    },

    fundget:{
        alignItems:"center",
        alignSelf:'center',
        marginTop:20,
    },


    google_or_other:{
        alignItems:"center",
        alignSelf:'center',
        marginTop:20,
    },
    


    row:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
    },


});
