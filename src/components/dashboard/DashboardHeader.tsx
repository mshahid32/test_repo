import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import constants from '../../constants';
import globalStyles from '../../assets/styles/GlobalStyles';

interface DashboardHeaderProps {
  handleMenu?: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = props => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={[globalStyles.h3, styles.titleText]}>GROWTECH</Text>
        <Text style={[globalStyles.h6]}>Application verifications</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity>
          <constants.svg.logo width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.handleMenu}>
          <constants.svg.logo width={24} height={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  actionContainer: {
    flexDirection: 'row',
  },
  titleText: {
    color: constants.colors.primary,
  }
});
export default DashboardHeader;
