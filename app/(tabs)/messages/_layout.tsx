import { Stack, router } from "expo-router";

export default function messagesLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "white" },
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="chat" options={{}} />
    </Stack>
  );
}
