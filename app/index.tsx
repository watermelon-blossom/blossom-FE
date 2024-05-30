import SlideModal, { ActionSheetRefType } from "@/components/ui/SlideModal";
import { useRef } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function TestScreen() {
  const actionSheetRef = useRef<ActionSheetRefType>(null);

  const handlePress = () => {
    actionSheetRef.current?.show();
  };

  return (
    <View style={styles.screen}>
      <Pressable onPress={handlePress}>
        <Text>open</Text>
      </Pressable>

      <SlideModal ref={actionSheetRef}>
        <View style={{ alignItems: "center", gap: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>Next Level!</Text>
          <Image
            source={{
              uri: "https://mblogthumb-phinf.pstatic.net/MjAyMjA1MjdfODAg/MDAxNjUzNjA1MjY1MDUw.pajYqhH0CIiJZUB9Y7yRmyOR-b7eCQM3-m1qNMLoE_0g.Kt9cgcFyDqhmmPJBxof_E42VhMC3oWhg615jv1eD_TQg.JPEG.vitaminnala/9D629C35%EF%BC%8DEA10%EF%BC%8D4040%EF%BC%8D919F%EF%BC%8D120C0E036B1A.jpeg?type=w800",
            }}
            style={{ width: "100%", height: 400 }}
          />
        </View>
      </SlideModal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});
