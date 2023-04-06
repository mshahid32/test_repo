import React from 'react';
import constants from '../../constants';
import {StyleSheet, Text, View} from 'react-native';
import SingleCheckBox from './SingleCheckBox';
import globalStyles from '../../assets/styles/GlobalStyles';

interface CheckBoxData {
  label: string;
  checked: boolean;
}
interface MultiCheckBoxProps {
  data: Array<CheckBoxData>;
  style?: object;
  label: string;
  handleChange: (val: Array<CheckBoxData>) => void;
}

const MultiCheckBox: React.FC<MultiCheckBoxProps> = props => {
  const checkboxHandler = (value: boolean, index: number) => {
    const newValue = props.data.map((checkbox, i) => {
      if (i === index) {
        return {
          ...checkbox,
          checked: !checkbox.checked,
        };
      }
      return checkbox;
    });
    props.handleChange(newValue);
  };

  return (
    <View style={[styles.mainContainer, props.style]}>
      {props.label && <Text style={globalStyles.componentLabelText}>{props.label}</Text>}
      {props.data.map((checkbox, i) => (
        <View style={styles.checkboxContainer} key={i}>
          <SingleCheckBox value={checkbox.checked} handleToggle={value => checkboxHandler(value, i)} />
          <Text>{checkbox.label}</Text>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
  },
  checkboxContainer: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
});
export default MultiCheckBox;
