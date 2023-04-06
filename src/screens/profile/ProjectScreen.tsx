import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyles from '../../assets/styles/GlobalStyles';
import HeaderBack from '../../components/common/HeaderBack';
import Button from '../../components/common/Button';
import EditText from '../../components/common/EditText';
import SingleCheckBox from '../../components/common/SingleCheckBox';
import DatePicker from '../../components/common/DatePicker';

const ProjectScreen = () => {
  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <HeaderBack title={'Projects'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyles.body}>
          <EditText
            name={'address'}
            label={'Name of Organization / Project'}
            onChangeText={val => console.log('Address', val)}
            placeholder={'Name of Organization / Project'}
            style={globalStyles.parentWidth}
            mainStyle={globalStyles.topComponentMargin}
          />
          <EditText
            name={'address'}
            label={'Scope of Project'}
            onChangeText={val => console.log('Address', val)}
            style={{...globalStyles.parentWidth, height: 150}}
            inputStyle={{height: 150}}
            multiline={true}
          />
          <DatePicker label={'Start Date'} placeholder={'Start Date'} onChangeValue={val => console.log(val)} style={globalStyles.parentWidth} />
          <DatePicker label={'End Date'} placeholder={'End Date'} onChangeValue={val => console.log(val)} style={globalStyles.parentWidth} />
          <View style={globalStyles.checkboxContainer}>
            <SingleCheckBox handleToggle={val => console.log(val)} />
            <Text style={globalStyles.checkboxText}>Currently Employed</Text>
          </View>
          <EditText name={'address'} label={'Roles & Responsibilities '} onChangeText={val => console.log('Address', val)} style={globalStyles.parentWidth} multiline={true} />
          <EditText name={'address'} label={'Reporting Line Manager'} onChangeText={val => console.log('Address', val)} placeholder={'Reporting Line Manager'} style={globalStyles.parentWidth} />
          <Button label={'Next'} onPress={() => console.log('called')} style={globalStyles.buttonMargin} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProjectScreen;
