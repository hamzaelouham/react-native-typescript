import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, LoginScreen, ExploreScreen} from './Screens';
import Stack from './Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name={'home'} component={HomeScreen} />
        <Stack.Screen name={'login'} component={LoginScreen} />
        <Stack.Screen name={'explore'} component={ExploreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
