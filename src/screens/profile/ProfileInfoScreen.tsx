import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import globalStyles from '../../assets/styles/GlobalStyles';
import HeaderBack from '../../components/common/HeaderBack';
import EditText from '../../components/common/EditText';
import constants from '../../constants';
import UpdateProfileImage from '../../components/profile/UpdateProfileImage';
import Button from '../../components/common/Button';

const ProfileInfoScreen = () => {
  const [rating, setRating] = useState(3);
  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <HeaderBack title={'Personal Info'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyles.body}>
          <UpdateProfileImage />
          <EditText
            name={'address'}
            label={'Full Name'}
            onChangeText={val => console.log('Address', val)}
            value={'John Doe'}
            rightIcon={<constants.svg.editGray width={14} height={14} />}
            style={globalStyles.parentWidth}
          />
          <EditText
            name={'address'}
            label={'CNIC'}
            onChangeText={val => console.log('Address', val)}
            value={'111-346-52791'}
            rightIcon={<constants.svg.editGray width={14} height={14} />}
            style={globalStyles.parentWidth}
          />
          <EditText
            name={'address'}
            label={'FGMP Number'}
            onChangeText={val => console.log('Address', val)}
            value={'3w231435'}
            rightIcon={<constants.svg.editGray width={14} height={14} />}
            style={globalStyles.parentWidth}
          />
          <EditText
            name={'address'}
            label={'DUNS Number'}
            onChangeText={val => console.log('Address', val)}
            value={'111-346-52791'}
            rightIcon={<constants.svg.editGray width={14} height={14} />}
            style={globalStyles.parentWidth}
          />
          <EditText
            name={'address'}
            label={'Passport Number'}
            onChangeText={val => console.log('Address', val)}
            value={'563 3532425525'}
            rightIcon={<constants.svg.editGray width={14} height={14} />}
            style={globalStyles.parentWidth}
          />
          <EditText
            name={'address'}
            label={'SECP Number'}
            onChangeText={val => console.log('Address', val)}
            value={'111-346-52791'}
            rightIcon={<constants.svg.editGray width={14} height={14} />}
            style={globalStyles.parentWidth}
          />
          <EditText
            name={'address'}
            label={'NTN'}
            onChangeText={val => console.log('Address', val)}
            value={'245-64332'}
            rightIcon={<constants.svg.editGray width={14} height={14} />}
            style={globalStyles.parentWidth}
          />
          <EditText
            name={'address'}
            label={'Email Address'}
            onChangeText={val => console.log('Address', val)}
            value={'johndeo@gmail.com'}
            rightIcon={<constants.svg.editGray width={14} height={14} />}
            style={globalStyles.parentWidth}
          />
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingLabelText}>Market Rating</Text>
            <StarRating rating={rating} onChange={val => setRating(val)} enableHalfStar={false} emptyColor={constants.colors.gray} />
          </View>
          <Button label={'Next'} onPress={() => console.log('called')} style={globalStyles.buttonMargin} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  ratingContainer: {
    marginBottom: 30,
  },
  ratingLabelText: {
    fontFamily: constants.fonts.UrbanistMedium,
    fontWeight: '600',
    color: constants.colors.black,
    marginTop: 5,
    marginBottom: 10,
  },
});
export default ProfileInfoScreen;
