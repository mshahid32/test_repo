import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import constants from '../../constants';

interface DashboardHeaderProps {
  icon: React.ReactElement<SVGSVGElement>;
  label: string;
  onPress?: () => void;
}

const ServiceCard: React.FC<DashboardHeaderProps> = props => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={props.onPress}>
      <View>{props.icon}</View>
      <Text style={styles.labelText}>{props.label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
  labelText: {
    fontSize: 11,
    color: constants.colors.black,
    fontFamily: constants.fonts.UrbanistMedium,
  },
});
export default ServiceCard;
