import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import constants from '../../constants';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import moment from 'moment';
import globalStyles from '../../assets/styles/GlobalStyles';

interface DatePickerProps {
  label?: string;
  placeholder: string;
  value?: any;
  style?: object;
  onChangeValue: (val: string) => void;
  required?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = props => {
  const [date, setDate] = useState(new Date());
  const [helperDate, setHelperDate] = useState();
  useEffect(() => {
    setHelperDate(props.value);
  }, [props.value]);
  const onChange = (event: any, selectedDate: any) => {
    setDate(selectedDate);
    setHelperDate(selectedDate);
    props.onChangeValue(selectedDate);
  };
  const datePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: 'date',
      is24Hour: true,
    });
  };
  return (
    <View>
      {props.label && <Text style={globalStyles.componentLabelText}>{props.label}</Text>}
      <TouchableOpacity style={{...styles.mainContainer, ...props.style}} activeOpacity={0.8} onPress={datePicker}>
        <Text>{helperDate ? `${moment(helperDate).format('DD/MM/YYYY')}` : props.placeholder}</Text>
        <constants.svg.calendar height={16} width={16} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '92%',
    backgroundColor: constants.colors.gray,
    marginVertical: 5,
    paddingHorizontal: 15,
    height: 50,
    borderRadius: 10,
  },
});
export default DatePicker;
