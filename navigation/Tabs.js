import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Coins from '../screens/Coins';
import Prices from '../screens/Prices';
import News from '../screens/News';
import colors from '../color/color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'


const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.backgroundColor
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textColor,
        headerStyle: {
          backgroundColor: colors.backgroundColor,
          borderBottomWidth: 0,
          borderWidth: 0,
          shadowColor: "transparnet"
        },
        headerTitleStyle: {
          fontSize: 18,
        },
        headerTintColor: colors.accent,
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontWeight: 600
        }
      }}>
      <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon: ({ color, size }) => (<FontAwesome5 name="home" color={color} size={size} />)
      }} />
      <Tab.Screen name='Coins' component={Coins} options={{
        tabBarIcon: ({ color, size }) => (<FontAwesome5 name="coins" color={color} size={size} />)
      }} />
      <Tab.Screen name='Prices' component={Prices} options={{
        tabBarIcon: ({ color, size }) => (<FontAwesome5 name="dollar-sign" color={color} size={size} />)
      }} />
      <Tab.Screen name='News' component={News} options={{
        tabBarIcon: ({ color, size }) => (<FontAwesome5 name="newspaper" color={color} size={size} />)
      }} />
    </Tab.Navigator >
  );
}
