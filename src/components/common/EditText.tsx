import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import constants from '../../constants';
import globalStyles from '../../assets/styles/GlobalStyles';

interface EditTextProps {
  mainStyle?: object;
  inputStyle?: object;
  style?: object;
  name: string;
  label?: string;
  onChangeText: (val: string) => void;
  leftIcon?: React.ReactElement<SVGSVGElement>;
  rightIcon?: React.ReactElement<SVGSVGElement>;
  value?: string;
  placeholder?: string;
  keyboardType?: string;
  secure?: boolean;
  editable?: boolean;
  error?: any;
  onPress?: () => void;
  multiline?: boolean;
}

const EditText: React.FC<EditTextProps> = props => {
  return (
    <SafeAreaView style={props.mainStyle}>
      {props.label && <Text style={globalStyles.componentLabelText}>{props.label}</Text>}
      <View style={[styles.mainContainer, {height: props.multiline && 200}, props.style]}>
        {props.leftIcon && <View style={styles.leftIcon}>{props.leftIcon}</View>}
        <TextInput
          style={[styles.input, {height: props.multiline && 200}, props.inputStyle]}
          onChangeText={props.onChangeText}
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor={'grey'}
          secureTextEntry={props.secure}
          textAlignVertical={props.multiline ? 'top' : 'center'}
          editable={props.editable}
          multiline={props.multiline}
        />
        {props.rightIcon && <View style={styles.rightIcon}>{props.rightIcon}</View>}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: constants.colors.gray,
    marginVertical: 5,
    paddingHorizontal: 14,
    height: 50,
    borderRadius: 10,
  },
  leftIcon: {
    marginRight: 5,
  },
  rightIcon: {
    marginLeft: 5,
  },
  input: {
    flexGrow: 1,
    flexBasis: 0,
  },
});
export default EditText;
