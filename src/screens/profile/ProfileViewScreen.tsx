import React from 'react';
import {SafeAreaView, ImageBackground, ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native';
import globalStyles from '../../assets/styles/GlobalStyles';
import HeaderBack from '../../components/common/HeaderBack';
import constants from '../../constants';
import UpdateProfileImage from '../../components/profile/UpdateProfileImage';
import ProfileDetailCard from '../../components/profile/ProfileDetailCard';
import profileData from './data/profileData';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../types/routes/RouteTypes';
import ProfileSkillCard from '../../components/profile/ProfileSkillCard';
import profileSkillData from './data/profileSkillDate';
type Props = NativeStackScreenProps<ProfileStackParams>;
const ProfileViewScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <HeaderBack title={'Profile'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={require('../../assets/images/profile/profileViewBg.png')} style={styles.bgImage}>
          <TouchableOpacity style={styles.editButton}>
            <constants.svg.edit width={20} height={20} />
          </TouchableOpacity>
          <UpdateProfileImage />
        </ImageBackground>
        <View style={[globalStyles.body, styles.profileBodyContainer]}>
          <ProfileDetailCard data={profileData} icon={<constants.svg.profileInfo width={40} height={40} />} handleNavigation={() => navigation.navigate('ProfileInfoScreen')} />
          <ProfileSkillCard data={profileSkillData} title={'Expertise'} icon={<constants.svg.expertise width={40} height={40} />} handleNavigation={() => navigation.navigate('ExpertiseScreen')} />
          <ProfileSkillCard data={profileSkillData} title={'Experience'} icon={<constants.svg.experience width={40} height={40} />} handleNavigation={() => navigation.navigate('ExperienceScreen')} />
          <ProfileSkillCard data={profileSkillData} title={'Projects'} icon={<constants.svg.projects width={40} height={40} />} handleNavigation={() => navigation.navigate('ProjectScreen')} />
          <ProfileSkillCard data={profileSkillData} title={'Education'} icon={<constants.svg.education width={40} height={40} />} handleNavigation={() => navigation.navigate('EducationScreen')} />
          <ProfileSkillCard
            data={profileSkillData}
            title={'Training & Certification'}
            icon={<constants.svg.training width={40} height={40} />}
            handleNavigation={() => navigation.navigate('TrainingScreen')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: 90,
  },
  editButton: {
    backgroundColor: constants.colors.white,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    top: 20,
    borderRadius: 18,
  },
  profileBodyContainer: {
    marginTop: 90,
  },
});
export default ProfileViewScreen;
