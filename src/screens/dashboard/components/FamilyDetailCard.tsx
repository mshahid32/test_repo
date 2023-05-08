import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import constants from '../../../constants';
import globalStyles from '../../../assets/styles/GlobalStyles';
import {useMemberDetail} from '../hooks/useMemberDetail';

interface FamilyDetailCardProps {
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
const FamilyDetailCard: React.FC<FamilyDetailCardProps> = props => {
  const {isLoading, memberDetailData} = useMemberDetail();
  return (
    <TouchableOpacity
      style={styles.headerContainer}
      onPress={props.handleNavigation}>
      <View style={[styles.cardHeader, globalStyles.boxWithShadow]}>
        <Text style={[globalStyles.h5, {color: constants.colors.white}]}>
          Family Details
        </Text>
      </View>
      {!isLoading && (
        <>
          <ViewItem
            label={'Family Member Name'}
            description={memberDetailData?.first_name}
          />
          <ViewItem
            label={'Family Member CNIC'}
            description={'61101-6523652-8'}
          />
          <ViewItem
            label={'Religion'}
            description={memberDetailData?.mreligion}
          />
          <ViewItem
            label={'Is Disable'}
            description={memberDetailData?.is_disable}
          />
          <ViewItem label={'Business Address'} description={'Islamabad'} />
        </>
      )}
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
});
export default FamilyDetailCard;
