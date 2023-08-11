import React from 'react';
import LatestPoemScreen from './poem/LatestPoemScreen';
import LatestMajlesScreen from './majles/LatestMajlesScreen';
import { TopTaps } from '@/layouts/material-top-taps';
import { Stack } from 'expo-router';




const TopTabsLayout = () => {
  return (
    <TopTaps>
      <TopTaps.Screen name='poem' />
      <TopTaps.Screen name='majles' />
    </TopTaps>
  );
};

export default TopTabsLayout;