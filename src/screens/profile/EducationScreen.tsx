import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyles from '../../assets/styles/GlobalStyles';
import HeaderBack from '../../components/common/HeaderBack';
import Button from '../../components/common/Button';
import constants from '../../constants';
import EditText from '../../components/common/EditText';
import SingleCheckBox from '../../components/common/SingleCheckBox';
import DatePicker from '../../components/common/DatePicker';
import DropDownView from '../../components/common/DropDownView';

const EducationScreen = () => {
  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <HeaderBack title={'Education'} rightIcon={<constants.svg.plus width={14} height={14} />} rightLabel={'Add'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyles.body}>
          <EditText
            name={'address'}
            label={'Name of Degree / Certificate'}
            onChangeText={val => console.log('Address', val)}
            placeholder={'Name of Degree / Certificate'}
            style={globalStyles.parentWidth}
            mainStyle={globalStyles.topComponentMargin}
          />
          <EditText
            name={'address'}
            label={'Name of School / Institute'}
            onChangeText={val => console.log('Address', val)}
            placeholder={'Name of School / Institute'}
            style={globalStyles.parentWidth}
          />
          <EditText name={'address'} label={'Major Subjects'} onChangeText={val => console.log('Address', val)} placeholder={'Major Subjects'} style={globalStyles.parentWidth} />
          <DatePicker label={'Start Date'} placeholder={'Start Date'} onChangeValue={val => console.log(val)} style={globalStyles.parentWidth} />
          <DatePicker label={'End Date'} placeholder={'End Date'} onChangeValue={val => console.log(val)} style={globalStyles.parentWidth} />
          <View style={globalStyles.checkboxContainer}>
            <SingleCheckBox handleToggle={val => console.log(val)} />
            <Text style={globalStyles.checkboxText}>Currently studying</Text>
          </View>
          <DropDownView label={'Grades'} placeholder={'Grades'} />
          <Button label={'Next'} onPress={() => console.log('called')} style={globalStyles.buttonMargin} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default EducationScreen;
