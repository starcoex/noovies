import React from 'react'
import { Text, View } from 'react-native'
import color from '../color/color';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#1e272e',
      }}>
      <Text style={{ color: color.accent }}>Home</Text>
    </View>
  );
}
