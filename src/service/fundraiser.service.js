import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = 'https://testffc.nimapinfotech.com/testdata.json';

export default async function FundRaiserService() {
  return new Promise(async function (resolve, reject) {
    try {
      const records = await AsyncStorage.getItem('records');
      const response = await axios.get(URL);
      if (records !== null) {
        console.log('# resolved 1');
        resolve(JSON.parse(records));
      }
      if (records === null) {
        try {
          console.log(response.data.data);
          console.log('# resolved 2');
          await AsyncStorage.setItem(
            'records',
            JSON.stringify(response.data.data),
          );
          resolve(response.data.data);
        } catch (error) {
          reject(Error('Error retrieving data, please try again.'));
        }
      }
    } catch (error) {
      reject(Error({Error: 'Need at least once to connect to the internet'}));
    }
  });
}
