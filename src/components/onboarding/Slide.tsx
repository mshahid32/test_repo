import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import constants from '../../constants';

const {width} = Dimensions.get('window');
interface SlideItem {
  id: string;
  image: any;
  title: string;
  subtitle: string;
  description: string;
}

interface SlideProps {
  onPress?: () => void;
  item: SlideItem;
}

const Slide: React.FC<SlideProps> = props => {
  return (
    <View style={styles.slideContainer}>
      <Image source={props.item?.image} style={styles.slideImage} />
      <View>
        <Text style={styles.title}>{props.item?.title}</Text>
        <Text style={styles.subTitle}>{props.item?.subtitle}</Text>
        <Text style={styles.description}>{props.item?.description}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  slideContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
  slideImage: {
    width: 200,
    height: undefined,
    aspectRatio: 1,
  },
  title: {
    color: constants.colors.white,
    fontSize: 22,
    marginTop: 20,
    textAlign: 'center',
    fontFamily: constants.fonts.UrbanistMedium,
  },
  subTitle: {
    color: constants.colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: constants.fonts.UrbanistMedium,
  },
  description: {
    color: constants.colors.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: 300,
    textAlign: 'center',
    lineHeight: 20,
    fontFamily: constants.fonts.UrbanistMedium,
  },
});
export default Slide;
