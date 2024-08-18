import Header from "@/components/ui/Header";
import { Stack, router } from "expo-router";

export default function messagesLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "white" },
        headerShown: false,
      }}
    >
      <Stack.Screen name="[id]/index" />
    </Stack>
  );
}
