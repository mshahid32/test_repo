import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import globalStyles from '../../assets/styles/GlobalStyles';
import DashboardHeader from '../dashboard/components/DashboardHeader';
import constants from '../../constants';
import ProfileCard from '../dashboard/components/ProfileCard';
import SwipePage from '../dashboard/components/SwipePage';

const DashboardScreen = () => {
  const handleMenuPress = () => {};
  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <DashboardHeader handleMenu={handleMenuPress} />
      <View style={styles.profileBackground} />
      <ProfileCard />
      <SwipePage />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  profileBackground: {
    backgroundColor: constants.colors.white,
    height: 80,
  },
});
export default DashboardScreen;
