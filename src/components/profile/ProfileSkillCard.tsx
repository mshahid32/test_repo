import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import constants from '../../constants';
import globalStyles from '../../assets/styles/GlobalStyles';

interface ProfileSkillCardProps {
  data: Array<ProfileSkillData>;
  title: string;
  icon: React.ReactElement<SVGSVGElement>;
  handleNavigation?: () => void;
}
interface ProfileSkillData {
  id: number;
  image: any;
  organization: string;
  role: string;
  time_period: string;
}
const ProfileSkillItem = ({image, organization, role, time_period}: ProfileSkillData) => {
  console.log(image);
  return (
    <View style={styles.profileItemContainer}>
      <Image source={image} style={styles.image} />
      <View style={{marginLeft: 10}}>
        <Text style={globalStyles.h5}>{organization}</Text>
        <Text style={globalStyles.componentLabelText}>{role}</Text>
        <Text style={styles.timePeriodText}>{time_period}</Text>
      </View>
    </View>
  );
};
const ProfileSkillCard: React.FC<ProfileSkillCardProps> = props => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <View style={[styles.mainContainer, globalStyles.boxWithShadow]}>
      <View style={styles.header}>
        <View style={styles.subContainer}>
          <View>{props.icon}</View>
          <Text style={[globalStyles.h3, styles.titleText]}>{props.title}</Text>
        </View>
        <TouchableOpacity onPress={props.handleNavigation}>
          <constants.svg.editGray width={16} height={16} />
        </TouchableOpacity>
      </View>

      {isExpanded
        ? props.data.map((item, index) => <ProfileSkillItem id={item.id} image={item.image} organization={item.organization} role={item.role} time_period={item.time_period} key={index} />)
        : props.data
            .slice(0, 2)
            .map((item, index) => <ProfileSkillItem id={item.id} image={item.image} organization={item.organization} role={item.role} time_period={item.time_period} key={index} />)}
      <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
        <Text style={globalStyles.seeDetailText}>{isExpanded ? 'Show less' : 'See all Details'}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: constants.colors.white,
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    marginLeft: 10,
  },
  profileItemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomColor: constants.colors.gray,
    borderBottomWidth: 1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  timePeriodText: {
    fontSize: 12,
  },
});
export default ProfileSkillCard;
