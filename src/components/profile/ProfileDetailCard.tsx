import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import constants from '../../constants';
import globalStyles from '../../assets/styles/GlobalStyles';

interface ProfileNavigationCardProps {
  data: ProfileData;
  icon: React.ReactElement<SVGSVGElement>;
  handleNavigation?: () => void;
}
interface ProfileData {
  id: number;
  name: string;
  cnic_number: string;
  fgmp_number: string;
  duns_number: string;
  rating: number;
}
interface ProfileItemProps {
  label: string;
  value: string;
}
const ProfileItem = ({label, value}: ProfileItemProps) => {
  return (
    <View style={styles.profileItemContainer}>
      <Text style={styles.itemLabelText}>{label}</Text>
      <Text style={styles.itemValueText}>{value}</Text>
    </View>
  );
};
const ProfileDetailCard: React.FC<ProfileNavigationCardProps> = props => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <View style={[styles.mainContainer, globalStyles.boxWithShadow]}>
      <View style={styles.header}>
        <View style={styles.subContainer}>
          <View>{props.icon}</View>
          <Text style={[globalStyles.h3, styles.titleText]}>{props.data.name}</Text>
        </View>
        <TouchableOpacity onPress={props.handleNavigation}>
          <constants.svg.editGray width={16} height={16} />
        </TouchableOpacity>
      </View>
      <ProfileItem label={'CNIC Number :'} value={props.data.cnic_number} />
      <ProfileItem label={'FGMP Number :'} value={props.data.fgmp_number} />
      <ProfileItem label={'DUNS Number :'} value={props.data.duns_number} />
      <View style={styles.profileItemContainer}>
        <Text style={styles.itemLabelText}>Market Rating :</Text>
        <View style={styles.rating}>
          <StarRating rating={props.data.rating} onChange={() => console.log('click')} enableHalfStar={false} emptyColor={constants.colors.gray} starSize={20} />
        </View>
      </View>
      {isExpanded && <ProfileItem label={'Name :'} value={props.data.name} />}
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
    marginVertical: 2,
  },
  itemLabelText: {
    fontFamily: constants.fonts.UrbanistMedium,
    fontWeight: '700',
    color: constants.colors.black,
    flexGrow: 2,
    flexBasis: 0,
    fontSize: 15,
  },
  itemValueText: {
    fontFamily: constants.fonts.UrbanistMedium,
    fontWeight: '600',
    marginLeft: 10,
    flexGrow: 3,
    flexBasis: 0,
  },
  rating: {
    flexGrow: 3,
    flexBasis: 0,
  },
});
export default ProfileDetailCard;
