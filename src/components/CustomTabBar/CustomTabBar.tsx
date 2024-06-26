import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../theme/images';
import {FONTS} from '../../theme';
import styles from './CustomTabBar.style';

interface Props {
  state: BottomTabBarProps['state'];
  descriptors: {
    [key: string]: BottomTabBarProps['descriptors'][string];
  };
  navigation: any;
}

const CustomTabBar: React.FC<Props> = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label: string =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        // Define the icon image source based on the route name
        let iconSource;
        if (route.name === 'Home') {
          iconSource = images.homeIcon;
        } else if (route.name === 'Surfing') {
          iconSource = images.surfingIcon;
        } else if (route.name === 'Hula') {
          iconSource = images.hulaIcon;
        } else if (route.name === 'Vulcano') {
          iconSource = images.vulcanoIcon;
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
            key={route.key}>
            <Image
              source={iconSource}
              style={[
                styles.tabIcon,
                {tintColor: isFocused ? '#008080' : '#001A1A'},
              ]}
              resizeMode="contain"
            />
            <Text
              style={{
                color: isFocused ? '#008080' : '#001A1A',
                fontFamily: isFocused ? FONTS.ibmPlexBold : FONTS.ibmPlexMedium,
                // fontSize: 10,
              }}>
              {label}
            </Text>
            {isFocused && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
