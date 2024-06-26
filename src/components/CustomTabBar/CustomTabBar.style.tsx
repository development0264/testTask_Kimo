import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  tabIcon: {
    width: 22,
    height: 22,
    marginBottom: 5,
  },
  tabIndicator: {
    width: '100%',
    height: 5,
    backgroundColor: '#008080',
    position: 'absolute',
    bottom: 0,
  },
});

export default styles;
