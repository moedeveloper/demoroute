import React from 'react';
import { View } from 'react-native';
import { Tabs } from '@/layouts/tabs';


export const unstable_settings = {
  initialRouteName: 'latest',
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