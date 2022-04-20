import React from 'react'
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import StartScreen from '../screens/001-StartScreen';

const MainStack = createStackNavigator();
const MainStackScreen =() =>(

    <MainStack.Navigator initialRouteName="StartScreen" >
        <MainStack.Screen name="Home" component={Home} options={{ headerShown:false }}  />
        <MainStack.Screen name="StartScreen" component={StartScreen} options={{ headerShown:false }} />

        {/* <MainStack.Screen 
                        name="CurrencyListScreen" 
                        component={CurrencyListScreen} 
                        options={({route})=>( 
                            {title: route.params&&route.params.title ,} 
                        )} 
        /> */}
    </MainStack.Navigator>
);

export default ()=>(
    <NavigationContainer>    
        <MainStackScreen/>
    </NavigationContainer>
) ;