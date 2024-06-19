import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

import AccountIcon from "@/components/icon/AccountIcon";
import DiscoverIcon from "@/components/icon/DiscoverIcon";
import MatchIcon from "@/components/icon/MatchIcon";
import MessageIcon from "@/components/icon/MessageIcon";

import { systemColor, theme } from "@/constants/colors";
import { wScale } from "@/util/responsive.util";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F3F3F3",
          height: wScale(80),
        },
        tabBarActiveTintColor: theme.primary,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="discover"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <View
                style={[
                  styles.indicator,
                  focused && { backgroundColor: color },
                ]}
              />
              <DiscoverIcon fill={focused ? color : systemColor.disabled} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <View
                style={[
                  styles.indicator,
                  focused && { backgroundColor: color },
                ]}
              />
              <MatchIcon
                fill={focused ? color : systemColor.disabled}
                isOn={true}
                // isOn={false}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <View
                style={[
                  styles.indicator,
                  focused && { backgroundColor: color },
                ]}
              />
              <MessageIcon fill={focused ? color : systemColor.disabled} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <View
                style={[
                  styles.indicator,
                  focused && { backgroundColor: color },
                ]}
              />
              <AccountIcon fill={focused ? color : systemColor.disabled} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: wScale(50),
    gap: wScale(10),
  },
  indicator: {
    width: wScale(60),
    height: wScale(2),
  },
});
