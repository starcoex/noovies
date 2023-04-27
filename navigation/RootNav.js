import React from 'react'
import Tabs from './Tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Stack from './Stack';

const Nav = createNativeStackNavigator()

export default function RootNav() {
  return (
    <Nav.Navigator screenOptions={{presentation:"modal", headerShown: false }}>
      <Nav.Screen name='Tabs' component={Tabs} />
      <Nav.Screen name='Stack' component={Stack} />
    </Nav.Navigator>
  );
}
