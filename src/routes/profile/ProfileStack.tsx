import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../types/routes/RouteTypes';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import ProfileInfoScreen from '../../screens/profile/ProfileInfoScreen';
import ExpertiseScreen from '../../screens/profile/ExpertiseScreen';
import ExperienceScreen from '../../screens/profile/ExperienceScreen';
import ProjectScreen from '../../screens/profile/ProjectScreen';
import EducationScreen from '../../screens/profile/EducationScreen';
import TrainingScreen from '../../screens/profile/TrainingScreen';
import OtherInfoScreen from '../../screens/profile/OtherInfoScreen';
import ProfileViewScreen from '../../screens/profile/ProfileViewScreen';

const Stack = createNativeStackNavigator<ProfileStackParams>();
const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="ProfileScreen">
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ProfileViewScreen" component={ProfileViewScreen} />
      <Stack.Screen name="ProfileInfoScreen" component={ProfileInfoScreen} />
      <Stack.Screen name="ExpertiseScreen" component={ExpertiseScreen} />
      <Stack.Screen name="ExperienceScreen" component={ExperienceScreen} />
      <Stack.Screen name="ProjectScreen" component={ProjectScreen} />
      <Stack.Screen name="EducationScreen" component={EducationScreen} />
      <Stack.Screen name="TrainingScreen" component={TrainingScreen} />
      <Stack.Screen name="OtherInfoScreen" component={OtherInfoScreen} />
    </Stack.Navigator>
  );
};
export default RootStack;
