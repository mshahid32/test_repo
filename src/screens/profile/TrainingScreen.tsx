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

const TrainingScreen = () => {
  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <HeaderBack title={'Training & Certification'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyles.body}>
          <EditText
            name={'address'}
            label={'Name of Training Course'}
            onChangeText={val => console.log('Address', val)}
            placeholder={'Name of Training Course'}
            style={globalStyles.parentWidth}
            mainStyle={globalStyles.topComponentMargin}
          />
          <DatePicker label={'Start Date'} placeholder={'Start Date'} onChangeValue={val => console.log(val)} style={globalStyles.parentWidth} />
          <DatePicker label={'End Date'} placeholder={'End Date'} onChangeValue={val => console.log(val)} style={globalStyles.parentWidth} />
          <DropDownView label={'Certification Type'} placeholder={'Certification Type'} />
          <View style={globalStyles.checkboxContainer}>
            <SingleCheckBox handleToggle={val => console.log(val)} />
            <Text style={globalStyles.checkboxText}>Others</Text>
          </View>
          <DropDownView label={'Certification Body'} placeholder={'Certification Body'} />
          <DropDownView label={'Certification Number'} placeholder={'Certification Number'} />
          <DatePicker label={'Valid Until'} placeholder={'dd/mm/yy'} onChangeValue={val => console.log(val)} style={globalStyles.parentWidth} />
          <Button label={'Next'} onPress={() => console.log('called')} style={globalStyles.buttonMargin} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default TrainingScreen;
