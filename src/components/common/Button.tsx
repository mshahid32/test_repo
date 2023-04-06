import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import constants from '../../constants';

interface CustomButtonProps {
  label: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
  colors?: Array<any>;
  leftIcon?: React.ReactElement<SVGSVGElement>;
}

const Button: React.FC<CustomButtonProps> = props => {
  return (
    <LinearGradient
      colors={props.colors ? props.colors : [constants.colors.gradientStart, constants.colors.gradientEnd]}
      style={{
        ...styles.mainContainer,
        ...props.style,
      }}>
      <TouchableOpacity onPress={props.onPress} style={styles.button}>
        {props.leftIcon && <View>{props.leftIcon}</View>}
        <Text style={{...styles.labelText, ...props.textStyle}}>{props.label}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    shadowColor: constants.colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row'
  },
  labelText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    paddingLeft: 10,
  },
});
export default Button;
