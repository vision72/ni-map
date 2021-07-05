import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';

import FundRaiserService from '../service/fundraiser.service';
import Card from '../components/card';

export const FundraiserScreen = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    FundRaiserService()
      .then(resolved => {
        console.log(resolved);
        setData(resolved.Records);
      })
      .catch(error => {
        console.log(error.Error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text1}>Record List</Text>
      </View>
      <View style={styles.content}>
        {data ? (
          <ScrollView>
            {data && data.map(item => <Card key={item.Id} record={item} />)}
          </ScrollView>
        ) : (
          <ActivityIndicator
            style={[styles.content, styles.spinner]}
            size={55}
            color="rgba(49,89,123,0.66)"
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#173349',
  },
  header: {
    margin: 10,
    height: 'auto',
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
  },
  content: {
    flex: 7,
    backgroundColor: 'white',
  },
  spinner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 24,
    color: 'white',
  },
});
