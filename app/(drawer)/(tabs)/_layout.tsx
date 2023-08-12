import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export const unstable_settings = {
  initialRouteName: '/app/(drawer)/(tabs)',
};

const TabsLayout: React.FC = () => {
  return (
    <Tabs>
      <Tabs.Screen name='latest' />
      <Tabs.Screen name='istikhara' />
    </Tabs>
        
  );
}

export default TabsLayout;