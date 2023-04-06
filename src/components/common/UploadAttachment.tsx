import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import constants from '../../constants';

interface DropDownViewProps {
  style?: object;
  label: string;
  onChangeText: (val: string) => void;
  rightIcon?: React.ReactElement<SVGSVGElement>;
  onPress?: () => void;
}

const UploadAttachment: React.FC<DropDownViewProps> = props => {
  return (
    <View style={{...styles.mainContainer, ...props.style}}>
      <Text style={styles.labelText}>{props.label}</Text>
      <TouchableOpacity style={styles.attachmentContainer} activeOpacity={0.8}>
        <constants.svg.attachment width={16} height={16} />
        <Text style={styles.attachmentText}>Upload attachments</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    width: '92%',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  labelText: {
    marginVertical: 10,
    fontFamily: constants.fonts.UrbanistExtraBold,
    color: constants.colors.black,
  },
  attachmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(77, 201, 162, 0.2)',
    height: 80,
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: constants.colors.gradientEnd,
  },
  attachmentText: {
    color: constants.colors.gradientEnd,
    fontFamily: constants.fonts.UrbanistMedium,
  },
});
export default UploadAttachment;
