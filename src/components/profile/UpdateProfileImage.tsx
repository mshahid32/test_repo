import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import constants from '../../constants';
interface CustomButtonProps {
  style?: object;
  onPress?: () => void;
}
const UpdateProfileImage: React.FC<CustomButtonProps> = props => {
  return (
    <View style={{...styles.mainContainer, ...props.style}}>
      <Image source={require('../../assets/images/profileImage.jpg')} style={styles.profileImage} />
      <TouchableOpacity style={styles.camera} activeOpacity={0.8}>
        <constants.svg.camera width={30} height={30} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10,
    borderColor: constants.colors.gray,
    borderWidth: 1,
    borderRadius: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  camera: {
    position: 'absolute',
    bottom: -15,
    right: -15,
  },
});
export default UpdateProfileImage;
