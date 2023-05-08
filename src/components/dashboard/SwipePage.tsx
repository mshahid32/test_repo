import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import constants from '../../constants';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import ApplicationDetailScreen from '../../screens/dashboard/ApplicationDetailScreen';
const Tab = createMaterialTopTabNavigator();
export default function SwipePage() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: constants.colors.background,
          marginHorizontal: 15,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          color: constants.colors.gradientEnd,
          fontWeight: 'bold',
          fontFamily: constants.fonts.UrbanistMedium,
        },
        tabBarItemStyle: {margin: 0, padding: 0},
        tabBarIndicatorStyle: {backgroundColor: constants.colors.gradientEnd},
      }}>
      <Tab.Screen
        name="Application Details"
        component={ApplicationDetailScreen}
      />
      <Tab.Screen name="Status" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
