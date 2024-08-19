import { Pressable, StyleSheet, View } from "react-native";
import Heading from "./Heading";
import CText from "./CText";
import { theme } from "@/constants/colors";
import { useEffect, useState } from "react";
import SelectButton from "./SelectButton";
import Dropdown, { DropdownItem } from "./Dropdown";
import SingleSliderInput from "./SingleSliderInput";
import DoubleSliderInput from "./DoubleSliderInput";
import { wScale } from "@/util/responsive.util";
import Button from "./Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

type FilterProps = {
  onFilterSave: () => void;
};

export default function Filter({ onFilterSave }: FilterProps) {
  const [filterSettings, setFilterSettings] = useState({
    tendency: 1,
    location: "서울",
    distance: 20,
    age: [20, 40],
  });

  useEffect(() => {
    const loadSettings = async () => {
      const savedSettings = await AsyncStorage.getItem("appSettings");
      if (savedSettings) {
        setFilterSettings(JSON.parse(savedSettings));
      }
    };
    loadSettings();
  }, []);

  const handleDistanceValue = (name: string, value: number) => {
    setFilterSettings((prev) => ({ ...prev, [name]: value }));
  };
  const handleAgeValue = (name: string, value: number[]) => {
    setFilterSettings((prev) => ({ ...prev, [name]: value }));
  };
  const handleTendencyValue = (name: string, value: number) => {
    setFilterSettings((prev) => ({ ...prev, [name]: value }));
  };
  const handleLocationValue = (name: string, value: string) => {
    setFilterSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setFilterSettings({
      tendency: 1,
      location: "서울",
      distance: 20,
      age: [20, 40],
    });
    AsyncStorage.setItem("appSettings", JSON.stringify(filterSettings));
  };

  const handleFilterSave = () => {
    AsyncStorage.setItem("appSettings", JSON.stringify(filterSettings));
    onFilterSave();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Heading level={3} style={styles.title}>
          매칭 필터
        </Heading>
        <Pressable
          style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
          onPress={handleClear}
        >
          <CText color={theme.primary} style={styles.clear}>
            초기화
          </CText>
        </Pressable>
      </View>
      <CText style={styles.text}>선호 성향</CText>
      <SelectButton
        name="tendency"
        defaultVal={filterSettings.tendency}
        onSelectMenu={handleTendencyValue}
      />
      <Dropdown
        data={data}
        name="location"
        labelName="거주지"
        defaultData={filterSettings.location}
        onSelect={handleLocationValue}
      />
      <View style={styles.textContainer}>
        <CText style={styles.text}>상대와의 최대 거리</CText>
        <CText style={styles.text}>{filterSettings.distance}km</CText>
      </View>
      <SingleSliderInput
        name="distance"
        value={filterSettings.distance}
        min={0}
        max={100}
        onChange={handleDistanceValue}
      />
      <View style={styles.textContainer}>
        <CText style={styles.text}>연령대</CText>
        <CText style={styles.text}>
          {filterSettings.age[0]}~{filterSettings.age[1]}
        </CText>
      </View>
      <DoubleSliderInput
        name="age"
        value={filterSettings.age}
        min={19}
        max={60}
        onChange={handleAgeValue}
        containerStyle={{ width: "100%" }}
      />
      <Button width="100%" onPress={handleFilterSave}>
        계속
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingBottom: wScale(20),
    gap: wScale(20),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: wScale(20),
    paddingLeft: wScale(50),
  },
  title: {
    flex: 1,
    textAlign: "center",
  },
  btn: {
    justifyContent: "flex-end",
  },
  clear: {
    textAlign: "right",
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    justifyContent: "flex-start",
    textAlign: "left",
  },
  textContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
