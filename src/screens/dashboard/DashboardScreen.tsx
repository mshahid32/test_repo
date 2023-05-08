import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import globalStyles from '../../assets/styles/GlobalStyles';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import constants from '../../constants';
import ProfileCard from '../../components/dashboard/ProfileCard';
import SwipePage from '../../components/dashboard/SwipePage';

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
