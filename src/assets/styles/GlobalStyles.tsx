import {StyleSheet} from 'react-native';
import constants from '../../constants';
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: constants.colors.background,
  },
  body: {
    marginHorizontal: 15,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  parentWidth: {
    width: '100%',
  },
  h1: {
    color: constants.colors.black,
    fontSize: 24,
    fontFamily: constants.fonts.UrbanistExtraBold,
    fontWeight: 'bold',
  },
  h2: {
    color: constants.colors.black,
    fontSize: 22,
    fontFamily: constants.fonts.UrbanistExtraBold,
    fontWeight: 'bold',
  },
  h3: {
    color: constants.colors.black,
    fontSize: 20,
    fontFamily: constants.fonts.UrbanistExtraBold,
    fontWeight: 'bold',
  },
  h4: {
    color: constants.colors.black,
    fontSize: 18,
    fontFamily: constants.fonts.UrbanistExtraBold,
    fontWeight: 'bold',
  },
  h5: {
    color: constants.colors.black,
    fontSize: 16,
    fontFamily: constants.fonts.UrbanistExtraBold,
    fontWeight: 'bold',
  },
  h6: {
    color: constants.colors.black,
    fontSize: 14,
    fontFamily: constants.fonts.UrbanistExtraBold,
    fontWeight: 'bold',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 20,
  },
  socialMediaButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 55,
    borderRadius: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    padding: 20,
    borderColor: constants.colors.gray,
  },
  haveAccountContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 30,
  },
  signUpText: {
    color: constants.colors.primary,
  },
  cardButton: {
    marginTop: -25,
    width: '85%',
    alignSelf: 'center',
  },
  termAndConditionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 40,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    fontFamily: constants.fonts.UrbanistMedium,
    color: constants.colors.dimGray,
  },
  componentLabelText: {
    fontFamily: constants.fonts.UrbanistMedium,
    fontWeight: '600',
    color: constants.colors.black,
    marginTop: 5,
  },
  topComponentMargin: {
    marginTop: 20,
  },
  buttonMargin: {
    marginVertical: 30,
  },
  boxWithShadow: {
    shadowColor: constants.colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  seeDetailText: {
    fontFamily: constants.fonts.UrbanistExtraBold,
    paddingTop: 5,
    color: constants.colors.darkGreen,
    fontWeight: '600',
  },
});
