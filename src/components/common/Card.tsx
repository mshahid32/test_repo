import React from 'react';
import {StyleSheet, View} from 'react-native';
import constants from '../../constants';

interface CardViewProps {
  children: React.ReactNode;
  style?: object;
}

const Card: React.FC<CardViewProps> = props => {
  return <View style={{...styles.backButton, ...props.style}}>{props.children}</View>;
};
const styles = StyleSheet.create({
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 30,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: constants.colors.magicMint,
    marginHorizontal: '3.5%',
    alignItems: 'center',
  },
});
export default Card;
