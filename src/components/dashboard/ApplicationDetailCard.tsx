import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import constants from '../../constants';
import globalStyles from '../../assets/styles/GlobalStyles';
import { useOrientation } from "../../hooks/common/useOrientation";

interface SaleCardProps {
  icon: React.ReactElement<SVGSVGElement>;
  label: string;
  category: string;
  handlePress?: () => void;
}

const ApplicationDetailCard: React.FC<SaleCardProps> = props => {
  const {dimensions} = useOrientation();
  return (
    <TouchableOpacity
      style={[styles.mainContainer, {width: dimensions.rem * 30}]}
      onPress={props.handlePress}>
      <View style={styles.itemContainer}>
        <View>{props.icon}</View>
        <Text style={globalStyles.h6}>{props.label}</Text>
        <Text>{props.category}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    justifyContent: 'center',
  },
  itemContainer: {
    paddingHorizontal: 5,
  },
});
export default ApplicationDetailCard;
