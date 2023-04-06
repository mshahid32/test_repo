import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import constants from '../../constants';
import globalStyles from '../../assets/styles/GlobalStyles';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import Button from '../../components/common/Button';
import salesData from './data/salesData';
import SaleCard from '../../components/dashboard/SaleCard';
import RecomendationSaleCard from "../../components/dashboard/RecomendationSaleCard";
const DashboardScreen = () => {
  const handleNavigation = () => {
    console.log('Called');
  };
  const buttonColors = [constants.colors.white, constants.colors.white];
  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <DashboardHeader />
      <View style={styles.body}>
        <ScrollView horizontal={true} style={{marginVertical: 20}}>
          <Button
            label={'All'}
            style={styles.button}
            onPress={handleNavigation}
            colors={buttonColors}
            textStyle={styles.buttonText}
          />
          <Button
            label={'Vegetables'}
            style={styles.button}
            onPress={handleNavigation}
            colors={buttonColors}
            textStyle={styles.buttonText}
            leftIcon={<constants.svg.veg width={20} height={20} />}
          />
          <Button
            label={'Fish'}
            style={styles.button}
            onPress={handleNavigation}
            colors={buttonColors}
            textStyle={styles.buttonText}
            leftIcon={<constants.svg.veg width={20} height={20} />}
          />
          <Button
            label={'Fish'}
            style={styles.button}
            onPress={handleNavigation}
            colors={buttonColors}
            textStyle={styles.buttonText}
            leftIcon={<constants.svg.veg width={20} height={20} />}
          />
        </ScrollView>
        <View style={styles.categoryContainer}>
          <Text style={globalStyles.h3}>Top Products</Text>
          <Text style={styles.showText}>SHOW ALL</Text>
        </View>
        <ScrollView horizontal={true}>
          {salesData.map((item, index) => (
            <SaleCard
              saleItem={item}
              handleSearch={() => console.log('Product Search Called')}
              key={index}
            />
          ))}
        </ScrollView>
        <View style={styles.categoryContainer}>
          <Text style={globalStyles.h3}>Recomendation</Text>
          <Text style={styles.showText}>SHOW ALL</Text>
        </View>
        <ScrollView horizontal={true}>
          {salesData.map((item, index) => (
            <RecomendationSaleCard
              saleItem={item}
              handleSearch={() => console.log('Product Search Called')}
              key={index}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body: {
    marginLeft: '3.5%',
  },
  button: {
    paddingLeft: 10,
    paddingRight: 20,
    height: 40,
    marginHorizontal: 5,
  },
  buttonText: {
    color: constants.colors.black,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '3.5%',
  },
  showText: {
    fontSize: 11,
  },
});
export default DashboardScreen;
