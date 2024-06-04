import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

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
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <SafeAreaProvider>
        <Stack screenOptions={{ contentStyle: { backgroundColor: "white" } }}>
          <Stack.Screen name="index" options={{ headerTitle: "Test Screen" }} />
          <Stack.Screen name="hyunwooTest" />
          <Stack.Screen name="siwonTest" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </SafeAreaProvider>
    </KeyboardAvoidingView>
  );
}
