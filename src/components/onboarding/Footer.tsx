import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import constants from '../../constants';
import Button from '../common/Button';
import slides from '../../screens/onboarding/data/slides';

const {width} = Dimensions.get('window');

interface FooterProps {
  handleStart: () => void;
  currentSlideIndex: number;
}

const Footer: React.FC<FooterProps> = props => {
  return (
    <View style={styles.footerContainer}>
      <Button label={'GET STARTED'} onPress={props.handleStart} colors={[constants.colors.white, constants.colors.white]} textStyle={styles.submitButtonText} style={styles.submitButton} />
      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              props.currentSlideIndex === index && {
                backgroundColor: constants.colors.white,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  footerContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicator: {
    height: 6,
    width: 6,
    backgroundColor: constants.colors.secondary,
    marginHorizontal: 3,
    borderRadius: 3,
  },
  submitButton: {
    width: (width / 100) * 70,
  },
  submitButtonText: {
    color: constants.colors.primary,
    fontFamily: constants.fonts.MontserratBold,
    fontWeight: 'bold',
  },
});
export default Footer;
