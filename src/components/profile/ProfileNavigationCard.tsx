import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import constants from '../../constants';
import globalStyles from '../../assets/styles/GlobalStyles';

interface ProfileNavigationCardProps {
  title: string;
  icon: React.ReactElement<SVGSVGElement>;
  onPress?: () => void;
}

const ProfileNavigationCard: React.FC<ProfileNavigationCardProps> = props => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={props.onPress} activeOpacity={0.5}>
      <View style={styles.subContainer}>
        <View>{props.icon}</View>
        <Text style={[globalStyles.h5, styles.titleText]}>{props.title}</Text>
      </View>
      <constants.svg.forwardArrow width={24} height={24} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: constants.colors.white,
    marginVertical: 5,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    marginLeft: 15,
    fontWeight: '600',
  },
});
export default ProfileNavigationCard;
