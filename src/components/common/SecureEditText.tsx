import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import constants from '../../constants';

interface EditTextProps {
  style?: object;
  name: string;
  onChangeText: (val: string) => void;
  leftIcon?: React.ReactElement<SVGSVGElement>;
  rightIcon?: React.ReactElement<SVGSVGElement>;
  value?: string;
  placeholder: string;
  keyboardType?: string;
  editable?: boolean;
  error?: any;
  onPress?: () => void;
}

const SecureEditText: React.FC<EditTextProps> = props => {
  const [isSecure, setIsSecure] = useState(true);
  const handleSecure = () => {
    setIsSecure(!isSecure);
  };
  return (
    <SafeAreaView style={{...styles.mainContainer, ...props.style}}>
      {props.leftIcon && <View>{props.leftIcon}</View>}
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={'grey'}
        secureTextEntry={isSecure}
        editable={props.editable}
      />
      {isSecure ? (
        <TouchableOpacity onPress={handleSecure}>
          <constants.svg.eye width={20} height={20} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleSecure}>
          <constants.svg.eyeClose width={20} height={20} />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '92%',
    backgroundColor: constants.colors.gray,
    margin: 10,
    paddingHorizontal: 15,
    height: 50,
    borderRadius: 10,
  },
  input: {
    flexGrow: 1,
    marginHorizontal: 5,
    flexBasis: 0,
  },
});
export default SecureEditText;
