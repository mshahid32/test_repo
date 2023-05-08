import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import globalStyles from '../../../assets/styles/GlobalStyles';
import constants from '../../../constants';

interface SaleCardProps {
  handlePress?: () => void;
}

const ProfileCard: React.FC<SaleCardProps> = props => {
  return (
    <TouchableOpacity
      style={[globalStyles.boxWithShadow, styles.mainContainer]}
      onPress={props.handlePress}>
      <View style={styles.itemContainer}>
        <Image
          source={require('../../assets/images/Avatar.png')}
          style={styles.image}
        />
        <View>
          <Text style={globalStyles.h4}>Ahmad Raza</Text>
          <View style={styles.phoneContainer}>
            <constants.svg.logo width={20} height={20} />
            <Text style={[globalStyles.h6, styles.phoneText]}>
              0315-5420628
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: 100,
    marginTop: -60,
    justifyContent: 'center',
    backgroundColor: constants.colors.white,
    marginHorizontal: '6%',
    borderWidth: 0.5,
    borderColor: constants.colors.gray,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 14,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneText: {
    color: constants.colors.primary,
    marginLeft: 5,
  },
});
export default ProfileCard;
