import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import constants from '../../../constants';
import globalStyles from '../../../assets/styles/GlobalStyles';

interface RequestAmountCardProps {
  handleNavigation?: () => void;
}
interface ViewItemProps {
  label: string;
  description: string;
}
const ViewItem = ({label, description}: ViewItemProps) => (
  <View style={styles.itemContainer}>
    <Text>{label}</Text>
    <Text style={globalStyles.h6}>{description}</Text>
  </View>
);
const RequestAmountCard: React.FC<RequestAmountCardProps> = props => {
  return (
    <TouchableOpacity
      style={styles.headerContainer}
      onPress={props.handleNavigation}>
      <View style={[styles.cardHeader, globalStyles.boxWithShadow]}>
        <Text style={[globalStyles.h5, {color: constants.colors.white}]}>
          Requested Amount
        </Text>
      </View>
      <ViewItem label={'Family Member Name'} description={'25000/-'} />
      <ViewItem label={'Category'} description={'Category'} />
      <ViewItem label={'Religion'} description={'Purpose'} />
      <View style={styles.status}>
        <Text style={styles.statusText}>Pending</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    margin: 20,
    backgroundColor: constants.colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: constants.colors.gray,
  },
  cardHeader: {
    backgroundColor: constants.colors.black,
    padding: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    padding: 5,
  },
  status: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  statusText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default RequestAmountCard;
