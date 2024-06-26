import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../theme';
import styles from './CustomHeader.style';

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Image source={images.headerLogo} style={styles.logoImage} />
    </View>
  );
};

export default CustomHeader;
