import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import constants from '../../constants';
import globalStyles from '../../assets/styles/GlobalStyles';
import {useNavigation} from '@react-navigation/native';

interface HeaderBackProps {
  title: string;
  handleBackNavigation?: () => void;
  rightIcon?: React.ReactElement<SVGSVGElement>;
  rightLabel?: string;
  handleRightPress?: () => void;
}

const HeaderBack: React.FC<HeaderBackProps> = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.backButton} onPress={props.handleBackNavigation ? props.handleBackNavigation : () => navigation.goBack()}>
        <constants.svg.back width={20} height={20} />
      </TouchableOpacity>
      <Text style={{...globalStyles.h3, flex: 1, textAlign: 'center'}}>{props.title}</Text>
      <TouchableOpacity onPress={props.handleRightPress} style={{...styles.actionContainer, paddingHorizontal: props.rightLabel ? 0 : 15}}>
        {props.rightIcon && <View>{props.rightIcon}</View>}
        <Text style={[globalStyles.h6, styles.rightText]}>{props.rightLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: constants.colors.white,
    marginTop: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: constants.colors.gray,
  },
  backButton: {
    padding: 10,
    backgroundColor: constants.colors.gray,
    borderRadius: 10,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightText: {
    color: constants.colors.primary,
    marginLeft: 5,
  },
});
export default HeaderBack;
