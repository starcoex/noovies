import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import { Text, TouchableOpacity, View } from 'react-native'

const ScreenOne = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("Two")}>
      <Text>One</Text>
    </TouchableOpacity>
  )
}
const ScreenTwo = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("Three")}>
      <Text>Two</Text>
    </TouchableOpacity>
  )
};
const ScreenThree = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Coins" })}>
      <Text style={{ color: 'red' }}>Three</Text>
    </TouchableOpacity>
  )
};

// const ScreenOne = ({ navigation: { navigate } }) => (
//   <TouchableOpacity onPress={() => navigate('Two')}>
//     <Text>go to two</Text>
//   </TouchableOpacity>
// );
// const ScreenTwo = ({ navigation: { navigate } }) => (
//   <TouchableOpacity onPress={() => navigate('Three')}>
//     <Text>go to three</Text>
//   </TouchableOpacity>
// );
// const ScreenThree = ({ navigation: { goBack } }) => (
//   <TouchableOpacity onPress={() => goBack() }>
//     <Text>Change title</Text> 
//   </TouchableOpacity>
// );
const NativeStack = createNativeStackNavigator();

export default function Stack() {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="One" component={ScreenOne} />
      <NativeStack.Screen name="Two" component={ScreenTwo} />
      <NativeStack.Screen name="Three" component={ScreenThree} />
    </NativeStack.Navigator>
  );
}

