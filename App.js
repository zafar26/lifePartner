import { StatusBar } from 'expo-status-bar';
// import React from 'react';

import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login'
import Dashboard from './screens/dashboard'
import Signup from './screens/signup'
import ForgotPass from './screens/forgotpass'
import ResetPass from './screens/resetpass'
import Verification from './screens/verification'


import { enableScreens } from 'react-native-screens';
enableScreens();




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName="login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="forgotpass" component={ForgotPass} />
        <Stack.Screen name="resetpass" component={ResetPass} />
        <Stack.Screen name="verify" component={Verification} />
        <Stack.Screen name="dashboard" component={Dashboard} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;