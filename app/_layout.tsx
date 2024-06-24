import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import CSafeAreaView from "@/components/ui/CSafeAreaView";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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
        <CSafeAreaView>
          <Stack
            screenOptions={{
              contentStyle: { backgroundColor: "white" },
              headerShown: false,
            }}
          >
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="index" />
            <Stack.Screen name="hyunwooTest" />
            <Stack.Screen name="siwonTest" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </CSafeAreaView>
      </SafeAreaProvider>
    </KeyboardAvoidingView>
  );
}
