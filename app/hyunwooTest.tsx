import { StyleSheet, View } from "react-native";
import { theme } from "@/constants/colors";
import Dropdown, { DropdownItem } from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";
import { useRef } from "react";
import SlideModal, { SlideModalRefType } from "@/components/ui/SlideModal";
import Filter from "@/components/ui/Filter";

export default function TestScreen() {
  const slideModalRef = useRef<SlideModalRefType>(null);
  const handleModal = () => {
    slideModalRef.current?.show();
  };

  return (
    <View style={styles.screen}>
      <Button onPress={handleModal}>open</Button>
      <SlideModal ref={slideModalRef}>
        <Filter />
      </SlideModal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.white,
  },
});
