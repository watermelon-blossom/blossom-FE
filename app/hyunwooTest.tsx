import { Pressable, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Card, { CARD_DATA } from "@/components/ui/Card";
import { theme } from "@/constants/colors";
import IconButton from "@/components/ui/IconButton";
import SvgIcon from "@/components/ui/SvgIcon";
import Icon from "@/assets/Icons/back.svg";
import { useState } from "react";
import { useSharedValue } from "react-native-reanimated";

const cardData: CARD_DATA[] = [
  {
    item: { title: "test1", image: require("../assets/images/test1.png") },
  },
  {
    item: { title: "test2", image: require("../assets/images/test2.png") },
  },
  {
    item: { title: "test3", image: require("../assets/images/test3.png") },
  },
];
export default function TestScreen() {
  // const [newData, setNewData] = useState([...data, ...data])
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedValue = useSharedValue(0);
  const MAX = 3;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.cardContainer}>
          {cardData.map((data, index) => {
            if (index > currentIndex + MAX || index < currentIndex) {
              return null;
            }
            return (
              <Card
                item={data.item}
                index={index}
                key={index}
                dataLength={cardData.length}
                maxVisibleItem={MAX}
                currentIndex={currentIndex}
                animatedValue={animatedValue}
                setCurrentIndex={setCurrentIndex}
              ></Card>
            );
          })}
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    padding: 20,
    backgroundColor: theme.contrast,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
