import { Drawer } from '@/src/components/Drawer';
import { LatestMajlesProvider, useLatestMajlesContext } from '@/src/contexts/LatestMajlesContext';
import { LatestPoemsProvider, useLatestPoemsContext } from '@/src/contexts/LatestPoemsContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {  
  return (
    <LatestPoemsProvider>
      <LatestMajlesProvider>
        <RootLayoutNav />
      </LatestMajlesProvider>
    </LatestPoemsProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const {loadingPoems} = useLatestPoemsContext();
  const {loadingLatestMajales} = useLatestMajlesContext();

  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    
    if (loaded && 
      !loadingPoems &&
      !loadingLatestMajales) 
    {
      SplashScreen.hideAsync();
    }
  }, [loaded, loadingPoems, loadingLatestMajales]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer screenOptions={{
        headerTitle: "alfa header"
      }}>
        
      </Drawer>
      {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack> */}
    </ThemeProvider>
  );
}
