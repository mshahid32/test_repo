import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import globalStyles from '../../assets/styles/GlobalStyles';
import Header from '../../components/common/Header';
import constants from '../../constants';
import ProfileNavigationCard from '../../components/profile/ProfileNavigationCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../types/routes/RouteTypes';

type Props = NativeStackScreenProps<ProfileStackParams>;
const ProfileScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <Header title={'Profile'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyles.body}>
          <TouchableOpacity style={styles.editProfileContainer} onPress={() => navigation.navigate('ProfileViewScreen')} activeOpacity={0.8}>
            <View style={styles.DetailContainer}>
              <Image source={require('../../assets/images/profileImage.jpg')} style={styles.profileImage} />
              <View style={styles.DetailSubContainer}>
                <Text style={globalStyles.h3}>John Deo</Text>
                <Text style={styles.emailText}>johndeo@gmail.com</Text>
              </View>
            </View>
            <TouchableOpacity>
              <constants.svg.edit width={20} height={20} />
            </TouchableOpacity>
          </TouchableOpacity>
          <ProfileNavigationCard title={'Personal Info'} icon={<constants.svg.profileInfo width={50} height={50} />} onPress={() => navigation.navigate('ProfileInfoScreen')} />
          <ProfileNavigationCard title={'Expertise'} icon={<constants.svg.expertise width={50} height={50} />} onPress={() => navigation.navigate('ExpertiseScreen')} />
          <ProfileNavigationCard title={'Experience'} icon={<constants.svg.experience width={50} height={50} />} onPress={() => navigation.navigate('ExperienceScreen')} />
          <ProfileNavigationCard title={'Projects'} icon={<constants.svg.projects width={50} height={50} />} onPress={() => navigation.navigate('ProjectScreen')} />
          <ProfileNavigationCard title={'Education'} icon={<constants.svg.education width={50} height={50} />} onPress={() => navigation.navigate('EducationScreen')} />
          <ProfileNavigationCard title={'Training & Certification'} icon={<constants.svg.training width={50} height={50} />} onPress={() => navigation.navigate('TrainingScreen')} />
          <ProfileNavigationCard title={'Other Info'} icon={<constants.svg.otherInfo width={50} height={50} />} onPress={() => navigation.navigate('OtherInfoScreen')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  editProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: constants.colors.gray,
    marginVertical: 10,
  },
  DetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DetailSubContainer: {
    marginLeft: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  emailText: {
    fontFamily: constants.fonts.UrbanistMedium,
  },
});
export default ProfileScreen;
