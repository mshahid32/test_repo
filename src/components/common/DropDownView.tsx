import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import constants from '../../constants';
import globalStyles from '../../assets/styles/GlobalStyles';

interface DropDownViewProps {
  style?: object;
  containerStyle?: object;
  label?: string;
  placeholder?: string;
  handlePress?: () => void;
  rightIcon?: React.ReactElement<SVGSVGElement>;
  onPress?: () => void;
}

const DropDownView: React.FC<DropDownViewProps> = props => {
  return (
    <View style={props.containerStyle}>
      {props.label && <Text style={globalStyles.componentLabelText}>{props.label}</Text>}
      <TouchableOpacity style={{...styles.mainContainer, ...props.style}} activeOpacity={0.8} onPress={props.handlePress}>
        <Text>{props.placeholder}</Text>
        {props.rightIcon ? <View>{props.rightIcon}</View> : <constants.svg.arrowDown width={10} height={10} />}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: constants.colors.gray,
    marginVertical: 5,
    paddingHorizontal: 15,
    height: 50,
    borderRadius: 10,
  },
});
export default DropDownView;
