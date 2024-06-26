import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar/CustomTabBar';
import Home from '../screens/Home/container/Home';
import Surfing from '../screens/Surfing/container/Surfing';
import Hula from '../screens/Hula/container/Hula';
import Vulcano from '../screens/Vulcano/container/Vulcano';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const options = {
    headerShown: false,
  };

  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} options={options} />
      <Tab.Screen name="Surfing" component={Surfing} options={options} />
      <Tab.Screen name="Hula" component={Hula} options={options} />
      <Tab.Screen name="Vulcano" component={Vulcano} options={options} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
