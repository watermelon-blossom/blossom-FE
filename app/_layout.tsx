import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack, router } from "expo-router";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import "moment/locale/ko";
import "../util/textIncoderProvidor";

import CSafeAreaView from "@/components/ui/CSafeAreaView";
import AnimationEffect from "@/components/ui/AnimationEffect";
import { StatusBar } from "expo-status-bar";
import moment from "moment";

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

  // testpage 자동 이동용
  useEffect(() => {
    if (loaded) {
      router.navigate(
        `messages/KIMID?data=${encodeURIComponent(
          JSON.stringify({
            id: "YANGID",
            name: "이시연",
            count: 123,
            lastMessage: "아저씨 누군데요!!!",
            uri: "https://cdn.news-ade.com/newsaid/2024/05/20180005/%EC%9D%B4%EC%8B%9C%EC%97%B02.jpg",
            time: moment().toISOString(),
          })
        )}`
      );
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <StatusBar style="dark" />
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
            <Stack.Screen name="matchSuccess" />
            <Stack.Screen name="hyunwooTest" />
            <Stack.Screen name="siwonTest" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <AnimationEffect />
        </CSafeAreaView>
      </SafeAreaProvider>
    </KeyboardAvoidingView>
  );
}
