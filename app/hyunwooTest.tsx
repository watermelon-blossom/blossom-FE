import { StyleSheet, View } from "react-native";
import { theme } from "@/constants/colors";
import Dropdown, { DropdownItem } from "@/components/ui/Dropdown";

const data: DropdownItem[] = [
  { label: "서울", value: "1" },
  { label: "경기", value: "2" },
  { label: "인천", value: "3" },
  { label: "강원", value: "4" },
  { label: "충북", value: "5" },
  { label: "충남", value: "6" },
  { label: "전북", value: "7" },
  { label: "전남", value: "8" },
  { label: "경북", value: "9" },
  { label: "경남", value: "10" },
  { label: "제주", value: "11" },
];

export default function TestScreen() {
  const handleSelect = (value: string) => {
    console.log(value);
  };

  return (
    <View style={styles.screen}>
      <Dropdown data={data} location="서울" onSelect={handleSelect} />
      <Dropdown
        data={data}
        location="서울"
        onSelect={handleSelect}
        disabled={true}
      />
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
