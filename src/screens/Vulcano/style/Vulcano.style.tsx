import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {FONTS} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    fontFamily: FONTS.ibmPlexBold,
    color: '#001A1A',
  },
});

export default styles;
