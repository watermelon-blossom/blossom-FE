import { Pressable, StyleSheet, View } from "react-native";
import Heading from "./Heading";
import CText from "./CText";
import { theme } from "@/constants/colors";
import { useState } from "react";
import SelectButton from "./SelectButton";
import Dropdown, { DropdownItem } from "./Dropdown";
import SingleSliderInput from "./SingleSliderInput";
import DoubleSliderInput from "./DoubleSliderInput";
import { wScale } from "@/util/responsive.util";
import Button from "./Button";
import useFilterStore from "@/store/useFilterStore";

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
  const {
    tendency,
    location,
    distance,
    age,
    setTendency,
    setLocation,
    setDistance,
    setAge,
  } = useFilterStore();
  const [selectInput, setSelectInput] = useState(tendency);
  const [dropdownInput, setDropdownInput] = useState(location);
  const [singleInput, setSingleInput] = useState({
    val1: distance,
  });
  const [doubleInput, setDoubleInput] = useState({
    val1: age,
  });

  const handleDistanceValue = (name: string, value: number) => {
    setSingleInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleAgeValue = (name: string, value: number[]) => {
    setDoubleInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleTendencyValue = (tendency: string, value: number) => {
    setSelectInput(value);
  };
  const handleLocationValue = (value: string) => {
    setDropdownInput(value);
  };

  const handleClear = () => {
    setSelectInput(1);
    setDropdownInput("서울");
    setSingleInput({ val1: 20 });
    setDoubleInput({ val1: [20, 40] });
  };

  const handleFilterSave = () => {
    setTendency(selectInput);
    setLocation(dropdownInput);
    setDistance(singleInput.val1);
    setAge(doubleInput.val1);
    onFilterSave();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Heading level={3} style={styles.title}>
          매칭 필터
        </Heading>
        <Pressable style={styles.btn} onPress={handleClear}>
          <CText color={theme.primary} style={styles.clear}>
            초기화
          </CText>
        </Pressable>
      </View>
      <CText style={styles.text}>선호 성향</CText>
      <SelectButton
        defaultVal={selectInput}
        onSelectMenu={handleTendencyValue}
      />
      <Dropdown
        data={data}
        location={dropdownInput}
        onSelect={handleLocationValue}
      />
      <View style={styles.textContainer}>
        <CText style={styles.text}>상대와의 최대 거리</CText>
        <CText style={styles.text}>{singleInput.val1}km</CText>
      </View>
      <SingleSliderInput
        name="val1"
        value={singleInput.val1}
        min={0}
        max={100}
        onChange={handleDistanceValue}
      />
      <View style={styles.textContainer}>
        <CText style={styles.text}>연령대</CText>
        <CText style={styles.text}>
          {doubleInput.val1[0]}~{doubleInput.val1[1]}
        </CText>
      </View>
      <DoubleSliderInput
        name="val1"
        value={doubleInput.val1}
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
  text: {
    justifyContent: "flex-start",
    textAlign: "left",
  },
  textContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
