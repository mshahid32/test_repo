import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import constants from '../../constants';
import {useNavigation} from '@react-navigation/native';

interface BackButtonProps {
  onPress?: () => void;
  style?: object;
}

const NavigationButton: React.FC<BackButtonProps> = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.backButton} onPress={props.onPress ? props.onPress : () => navigation.goBack()}>
      <constants.svg.back width={20} height={20} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  backButton: {
    zIndex: 1,
    position: 'absolute',
    padding: 10,
    backgroundColor: constants.colors.white,
    borderRadius: 10,
    left: '6%',
    top: 20,
  },
});
export default NavigationButton;
