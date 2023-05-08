import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from '../types/routes/RouteTypes';
import DashboardScreen from '../screens/dashboard/DashboardScreen';

const Stack = createNativeStackNavigator<RootStackParams>();
const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'DashboardScreen'} component={DashboardScreen} />
    </Stack.Navigator>
  );
};
export default RootStack;
