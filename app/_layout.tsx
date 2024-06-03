import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

// TODO: ThemeProvider 설정하기
export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    BM: require("../assets/fonts/BMDOHYEON_ttf.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerTitle: "Test Screen" }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </SafeAreaProvider>
    </KeyboardAvoidingView>
    // </ThemeProvider>
  );
}
