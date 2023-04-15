import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";


import HomeScreen from "./screens/Home"
import InformationScreen from "./screens/Information"
import CreateScreen from "./screens/Create"

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
    
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Information" component={InformationScreen} />
    <Stack.Screen name="Create" component={CreateScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
      
});
