import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
    width: '100%',
  },
  logoImage: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
});

export default styles;
