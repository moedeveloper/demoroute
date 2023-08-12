import React from 'react';
import {Drawer} from 'expo-router/drawer';

const drawerLayout: React.FC = () => {
  return <Drawer>
    <Drawer.Screen name='(tabs)' />
  </Drawer>;
}

export default drawerLayout;