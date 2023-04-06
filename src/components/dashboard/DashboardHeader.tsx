import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import constants from '../../constants';
import globalStyles from '../../assets/styles/GlobalStyles';

interface DashboardHeaderProps {
  onPress?: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = props => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={globalStyles.h6}>Good Morning</Text>
        <Text style={globalStyles.h2}>Ghazi</Text>
        <View style={styles.location}>
          <constants.svg.marker width={20} height={20} />
          <Text style={{paddingLeft: 10}}>Tlogomas, Malang</Text>
        </View>
      </View>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          source={require('../../assets/images/Avatar.png')}
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    margin: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
});
export default DashboardHeader;
