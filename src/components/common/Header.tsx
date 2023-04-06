import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import constants from '../../constants';
import globalStyles from '../../assets/styles/GlobalStyles';

interface HeaderProps {
  title: string;
  onPress?: () => void;
}

const Header: React.FC<HeaderProps> = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <constants.svg.logo width={40} height={40} />
        <Text style={[globalStyles.h3, styles.titleText]}>{props.title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: constants.colors.white,
    marginTop: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: constants.colors.gray,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    marginLeft: 15,
  },
});
export default Header;
