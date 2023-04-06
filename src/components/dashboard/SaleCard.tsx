import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import constants from '../../constants';
import globalStyles from "../../assets/styles/GlobalStyles";
interface SaleItem {
  id: number;
  image: any;
  title: string;
  price: string;
  weight: string;
}

interface SaleCardProps {
  saleItem: SaleItem;
  handleSearch?: () => void;
}

const SaleCard: React.FC<SaleCardProps> = props => {
  return (
    <TouchableOpacity
      style={{
        ...styles.mainContainer,
        marginLeft: props.saleItem.id === 1 ? 0 : 20,
      }}
      onPress={props.handleSearch}>
      <View style={styles.itemContainer}>
        <Image source={props.saleItem.image} style={styles.image} />
        <View>
          <Text style={styles.labelText}>{props.saleItem.title}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
            <View>
              <Text style={styles.weightText}>{props.saleItem.weight}</Text>
              <Text style={globalStyles.h5}>{props.saleItem.price}</Text>
            </View>
            <View style={styles.addContainer}>
              <Text style={styles.addText}>+</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: 150,
    height: 190,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: constants.colors.white,
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: constants.colors.gray,
    borderRadius: 10,
    shadowColor: constants.colors.dimGray,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  itemContainer: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    marginHorizontal: 10,
  },
  labelText: {
    fontFamily: constants.fonts.ManropeBold,
    color: constants.colors.black,
    fontWeight: 'bold',
    fontSize: 14,
  },
  weightText: {
    fontFamily: constants.fonts.ManropeRegular,
    color: constants.colors.darkGray,
    fontSize: 12,
  },
  addContainer: {
    width: 35,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: constants.colors.primary,
    marginTop: 10,
  },
  addText: {
    fontSize: 22,
    color: constants.colors.white,
  }
});
export default SaleCard;
