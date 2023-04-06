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

const OtherInfoScreen = () => {
  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <HeaderBack title={'Other Info'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyles.body}>
          <EditText
            name={'address'}
            label={'Bank Account Info'}
            onChangeText={val => console.log('Address', val)}
            placeholder={'Bank Account Info'}
            style={globalStyles.parentWidth}
            mainStyle={globalStyles.topComponentMargin}
          />
          <EditText name={'address'} label={'Passport Number'} onChangeText={val => console.log('Address', val)} placeholder={'Passport Number'} style={globalStyles.parentWidth} />
          <EditText
            name={'address'}
            label={'Payment Gateway Account Number'}
            onChangeText={val => console.log('Address', val)}
            placeholder={'Payment Gateway Account Number'}
            style={globalStyles.parentWidth}
          />
          <EditText
            name={'address'}
            label={'International Account Number'}
            onChangeText={val => console.log('Address', val)}
            placeholder={'International Account Number'}
            style={globalStyles.parentWidth}
          />
          <Button label={'Next'} onPress={() => console.log('called')} style={globalStyles.buttonMargin} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default OtherInfoScreen;
