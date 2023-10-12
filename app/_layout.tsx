import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import {TamaguiProvider} from "tamagui";
import appConfig from "../tamagui.config";
import { Provider } from 'react-redux';
import store from '../store';
import { ConversationSheet, ManageTagsSheet, SettingsSheet } from '../sheets';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // light
    'NotoSans-Light': require('../assets/fonts/Noto_Sans/NotoSans-Light.ttf'),
    'NotoSans-LightItalic': require('../assets/fonts/Noto_Sans/NotoSans-LightItalic.ttf'),
    //regular
    'NotoSans-Regular': require('../assets/fonts/Noto_Sans/NotoSans-Regular.ttf'),
    'NotoSans-Italic': require('../assets/fonts/Noto_Sans/NotoSans-Italic.ttf'),
    //semi-bold
    'NotoSans-Medium': require('../assets/fonts/Noto_Sans/NotoSans-Medium.ttf'),
    'NotoSans-MediumItalic': require('../assets/fonts/Noto_Sans/NotoSans-MediumItalic.ttf'),
    //semi-bold
    'NotoSans-SemiBold': require('../assets/fonts/Noto_Sans/NotoSans-SemiBold.ttf'),
    'NotoSans-SemiBoldItalic': require('../assets/fonts/Noto_Sans/NotoSans-SemiBoldItalic.ttf'),
    // bold
    'NotoSans-Bold': require('../assets/fonts/Noto_Sans/NotoSans-Bold.ttf'),
    'NotoSans-BoldItalic': require('../assets/fonts/Noto_Sans/NotoSans-BoldItalic.ttf'),
    // black
    'NotoSans-Black': require('../assets/fonts/Noto_Sans/NotoSans-Black.ttf'),
    'NotoSans-BlackItalic': require('../assets/fonts/Noto_Sans/NotoSans-BlackItalic.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <TamaguiProvider config={appConfig} defaultTheme={colorScheme == 'dark' ? 'dark': 'light'} >
        <Provider
          store={store}
        >
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
          
          <ConversationSheet/>
          <SettingsSheet/>
        </Provider>
      </TamaguiProvider>
    </ThemeProvider>
  );
}
