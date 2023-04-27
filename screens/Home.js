import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import color from '../color/color';

export default function Home({navigation:{navigate} }) {
  return (
    <TouchableOpacity
      onPress={()=>navigate("Stack", {screen:"Three"})}
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: '#1e272e',
      }}>
      <Text style={{ color: color.accent }}>Home</Text>
    </TouchableOpacity>
  );
}
