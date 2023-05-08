import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import ApplicationDetailCard from '../../components/dashboard/ApplicationDetailCard';
import constants from '../../constants';
import globalStyles from '../../assets/styles/GlobalStyles';
import FamilyDetailCard from "./components/FamilyDetailCard";
import RequestAmountCard from "./components/RequestAmountCard";

const ApplicationDetailScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={globalStyles.body}>
          <View style={styles.cardContainer}>
            <ApplicationDetailCard
              icon={<constants.svg.logo width={40} height={40} />}
              label={'Male'}
              category={'Gender'}
            />
            <ApplicationDetailCard
              icon={<constants.svg.logo width={40} height={40} />}
              label={'Singal'}
              category={'Martial Status'}
            />
            <ApplicationDetailCard
              icon={<constants.svg.logo width={40} height={40} />}
              label={'Father'}
              category={'Gender'}
            />
          </View>
          <View style={styles.cardContainer}>
            <ApplicationDetailCard
              icon={<constants.svg.logo width={40} height={40} />}
              label={'03002145214'}
              category={'Mobile'}
            />
            <ApplicationDetailCard
              icon={<constants.svg.logo width={40} height={40} />}
              label={'14-May-1998'}
              category={'Date of Birth'}
            />
            <ApplicationDetailCard
              icon={<constants.svg.logo width={40} height={40} />}
              label={'Intermediate'}
              category={'Education'}
            />
          </View>
        </View>
        <FamilyDetailCard />
        <RequestAmountCard />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: constants.colors.white,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
export default ApplicationDetailScreen;
