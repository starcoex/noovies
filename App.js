import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Entypo from '@expo/vector-icons/Entypo';
import * as Font from 'expo-font';
import { Image, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Asset } from 'expo-asset';


SplashScreen.preventAutoHideAsync()

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
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // await Font.loadAsync(Ionicons.font)
        const fonts =  loadFonts([Ionicons.font])
        const images =  loadImages([
          require('./assets/crypto.png'),
          'https://w7.pngwing.com/pngs/72/663/png-transparent-bitcoin-gold-cryptocurrency-bitcoin-medal-material-metal-thumbnail.png',
        ]);   
        console.log(images)
        await Promise.all([...fonts, ...images])
        // await Asset.loadAsync(require("./assets/crypto.png"))
        // await Image.prefetch(
        //   'https://w7.pngwing.com/pngs/72/663/png-transparent-bitcoin-gold-cryptocurrency-bitcoin-medal-material-metal-thumbnail.png'
        // );
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (ready) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [ready]);

  if (!ready) {
    return null;
  }
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}>
      <Text>SplashScreen Demo! 👋</Text>
      <Entypo name='rocket' size={30} />
      <Ionicons name='compass' size={30} color='black' />
    </View>
  );

}

