import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LatestPoemScreen from './LatestPoemScreen';
import LatestMajlesScreen from './LatestMajlesScreen';



const Tab = createMaterialTopTabNavigator();

const TopTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen1" component={LatestPoemScreen} />
      <Tab.Screen name="Screen2" component={LatestMajlesScreen} />
    </Tab.Navigator>
  );
};

export default TopTabsNavigator;