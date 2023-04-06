import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import constants from '../constants';

const Home = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.text}>Home</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  text: {
    color: constants.colors.text,
    fontFamily: constants.fonts.DMSansBold,
  },
});
export default Home;
