import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Entypo from '@expo/vector-icons/Entypo';
import * as Font from 'expo-font';
import { Image, StatusBar, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Asset } from 'expo-asset';
import Tabs from './navigation/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { fab } from '@fortawesome/free-brands-svg-icons';



// SplashScreen.preventAutoHideAsync()

const loadFonts = (fonts)=>fonts.map(font=>Font.loadAsync(font))
const loadImages = (images) => images.map(image => {
  if (typeof image === "string") {
    return Image.prefetch(image)
  } else {
    return Asset.loadAsync(image)
  }
})

export default function App() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    async function prepare() {
      try {    
        await Font.loadAsync(Entypo.font);
        const fonts =  loadFonts([Ionicons.font])
        const images =  loadImages([
          require('./assets/crypto.png'),
          'https://w7.pngwing.com/pngs/72/663/png-transparent-bitcoin-gold-cryptocurrency-bitcoin-medal-material-metal-thumbnail.png',
        ]);   
        await Promise.all([...fonts, ...images])      
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (ready) {   
      await SplashScreen.hideAsync();
    }
  }, [ready]);
  if (!ready) {
    return null;
  }
  return (
    <>
      <NavigationContainer>
        <Tabs />
        <StatusBar  />
      </NavigationContainer>
      {/* <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onLayout={onLayoutRootView}>
        <Text>SplashScreen Demo! 👋</Text>
        <Entypo name='rocket' size={30} />
        <Ionicons name='compass' size={30} color='black' />
      </View> */}
    </>
  );

}

