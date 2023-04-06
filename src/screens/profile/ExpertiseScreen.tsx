import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import globalStyles from '../../assets/styles/GlobalStyles';
import HeaderBack from '../../components/common/HeaderBack';
import Button from '../../components/common/Button';
import constants from '../../constants';
import DropDownView from '../../components/common/DropDownView';
import MultiCheckBox from '../../components/common/MultiCheckBox';

const ExpertiseScreen = () => {
  const [checkboxData, setCheckboxData] = useState([
    {label: 'Controller', checked: true},
    {label: 'Management Consultant', checked: false},
    {label: 'Financial Manager', checked: false},
  ]);
  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <HeaderBack title={'Expertise'} rightIcon={<constants.svg.plus width={14} height={14} />} rightLabel={'Add'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyles.body}>
          <DropDownView label={'Accounting & Finance'} placeholder={'Accounting & Finance'} containerStyle={{marginTop: 20}} />
          <MultiCheckBox label={''} data={checkboxData} handleChange={val => setCheckboxData(val)} />
          <Button label={'Next'} onPress={() => console.log('called')} style={globalStyles.buttonMargin} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ExpertiseScreen;
