import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Moment from 'moment';

export default function Card({record}) {
  const [like, setLike] = React.useState(false);
  const {
    Id,
    title,
    shortDescription,
    collectedValue,
    totalValue,
    startDate,
    endDate,
    mainImageURL,
  } = record;

  const diff = Moment(startDate, 'DD-MM-YYYY');
  const dateDiff = Moment(endDate, 'DD-MM-YYYY').diff(diff, 'days');

  return (
    <View key={Id} style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: mainImageURL,
          }}
          style={styles.imageItem}
        />
      </View>
      <View style={styles.recordTitle}>
        <View style={styles.informationContainer}>
          <View style={styles.informationRow}>
            <View style={styles.informationRowColumn}>
              <Text style={styles.text2title}>{title}</Text>
              <Text>{shortDescription}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setLike(!like);
              }}>
              <View style={styles.informationRowColumn}>
                <Icon
                  name={like ? 'heart' : 'hearto'}
                  type="AntDesign"
                  size={22}
                  style={{color: like ? 'red' : 'black'}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.percentage}>
          <Text style={styles.text2percentage}>
            {Math.round((collectedValue / totalValue) * 100)}%
          </Text>
        </View>
      </View>
      <View style={[styles.informationRow, styles.extendedInformationRow]}>
        <View
          style={[
            styles.informationRowColumn,
            styles.extendedInformationRowColumn,
          ]}>
          <View style={[styles.informationRow, styles.cardFooterRow]}>
            <Text style={styles.text1}>{'\t\u20B9'}</Text>
            <Text style={[styles.text2percentage, styles.text3]}>
              {collectedValue}
            </Text>
          </View>
          <Text style={[styles.text2percentage, styles.text3footer]}>
            funded
          </Text>
        </View>
        <View
          style={[
            styles.informationRowColumn,
            styles.extendedInformationRowColumn,
          ]}>
          <View style={[styles.informationRow, styles.cardFooterRow]}>
            <Text style={styles.text1}>{'\t\u20B9'}</Text>
            <Text style={[styles.text2percentage, styles.text3]}>
              {totalValue}
            </Text>
          </View>
          <Text style={[styles.text2percentage, styles.text3footer]}>
            goals
          </Text>
        </View>
        <View
          style={[
            styles.informationRowColumn,
            styles.extendedInformationRowColumn,
          ]}>
          <View style={[styles.informationRow, styles.cardFooterRow]}>
            <Text style={[styles.text2percentage, styles.text3]}>
              {dateDiff}
            </Text>
          </View>
          <Text style={[styles.text2percentage, styles.text3footer]}>
            ends in
          </Text>
        </View>
        <TouchableOpacity
          background={TouchableNativeFeedback.Ripple('black', false)}
          onPress={() => {
            ToastAndroid.show('Thank you for being a part', ToastAndroid.SHORT);
          }}>
          <View style={styles.buttonContainer}>
            <Text
              style={[
                styles.text2percentage,
                styles.text3footer,
                styles.buttonText,
              ]}>
              pledge
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: 'rgba(49,89,123,0.66)',
  },
  imageContainer: {
    height: 300 * 0.7,
    backgroundColor: 'cyan',
  },
  recordTitle: {
    transform: [{translateY: -90}],
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  informationContainer: {
    width: 300 * 0.9,
    borderRadius: 7,
    padding: 300 * 0.05,
    height: 300 * 0.4,
    flexDirection: 'column',
    backgroundColor: 'aliceblue',
  },
  informationRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  extendedInformationRow: {
    marginHorizontal: 0,
    transform: [{translateY: -90}],
    marginVertical: 32,
    justifyContent: 'space-evenly',
  },
  cardFooterRow: {
    width: 79,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  informationRowColumn: {
    height: 300 * 0.25,
    width: 300 * 0.7,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  extendedInformationRowColumn: {
    width: 300 * 0.3,
    height: 300 * 0.24,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  percentage: {
    width: 300 * 0.22,
    height: 300 * 0.22,
    borderRadius: 300 / 2,
    marginHorizontal: 5,
    backgroundColor: '#173349',
    alignSelf: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    borderRadius: (300 * 0.4) / 2,
    width: 300 * 0.4,
    height: 300 * 0.1,
    marginHorizontal: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  imageItem: {
    height: 300 * 0.7,
  },
  text1: {
    fontSize: 24,
    color: 'white',
  },
  text2title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2percentage: {
    fontSize: 14,
    color: 'white',
  },
  text3: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  text3footer: {
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  buttonText: {
    color: 'rgba(49,89,123,0.66)',
    fontWeight: 'bold',
  },
});
