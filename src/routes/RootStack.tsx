import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from '../types/routes/RouteTypes';
import BottomNavigator from './bottom_navigation/BottomNavigator';

const Stack = createNativeStackNavigator<RootStackParams>();
const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
export default RootStack;
