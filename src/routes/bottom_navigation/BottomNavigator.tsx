import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import DashboardScreen from '../../screens/dashboard/DashboardScreen';
import constants from '../../constants';
import Home from '../../screens/Home';
import ProfileStack from '../profile/ProfileStack';

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    activeIcon: <constants.svg.home width={20} height={20} />,
    inActiveIcon: <constants.svg.inActiveHome width={20} height={20} />,
    component: DashboardScreen,
  },
  {
    route: 'Like',
    label: 'Like',
    activeIcon: <constants.svg.logo width={20} height={20} />,
    inActiveIcon: <constants.svg.inActiveInfo width={20} height={20} />,
    component: Home,
  },
  {
    route: 'Search',
    label: 'Search',
    activeIcon: <constants.svg.logo width={20} height={20} />,
    inActiveIcon: <constants.svg.inActiveInfo width={20} height={20} />,
    component: DashboardScreen,
  },
  {
    route: 'Profile',
    label: 'Profile',
    activeIcon: <constants.svg.profile width={20} height={20} />,
    inActiveIcon: <constants.svg.inActiveProfile width={20} height={20} />,
    component: ProfileStack,
  },
];

const Tab = createBottomTabNavigator();
const TabButton = (props: {
  item: any;
  onPress: any;
  accessibilityState: any;
}) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      {focused ? (
        <View>{item.activeIcon}</View>
      ) : (
        <View>{item.inActiveIcon}</View>
      )}
    </TouchableOpacity>
  );
};

export default function BottomNavigator() {
  return (
    <View style={{flex: 1, backgroundColor: constants.colors.background}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            borderRadius: 20,
            marginVertical: 10,
            marginHorizontal: 20,
            elevation: 0,
            backgroundColor: constants.colors.white,
            borderTopWidth: 0,
          },
        }}>
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarButton: props => (
                  <TabButton
                    {...props}
                    item={item}
                    onPress={props.onPress}
                    accessibilityState={props.accessibilityState}
                  />
                ),
              }}
            />
          );
        })}
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
