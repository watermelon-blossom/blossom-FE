import { StyleSheet, View, ViewStyle } from "react-native";
import MultiSlider, {
  MarkerProps,
} from "@ptomasroos/react-native-multi-slider";
import { gray, theme } from "@/constants/colors";
import { wScale } from "@/util/responsive.util";

type SliderProps = {
  name: string;
  value: number;
  min: number;
  max: number;
  width?: number;
  height?: number;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  onChange: (name: string, value: number) => void;
};

export default function SingleSliderInput({
  name,
  value,
  min = 0,
  max = 1,
  disabled = false,
  containerStyle,
  onChange,
}: SliderProps) {
  const handleChangeValue = (value: number) => {
    onChange && onChange(name, value);
  };

  return (
    <MultiSlider
      values={[value]}
      min={min}
      max={max}
      enabledOne={!disabled}
      customMarker={(props) => {
        return <Marker {...props} />;
      }}
      containerStyle={containerStyle}
      trackStyle={disabled ? styles.disabledTrack : styles.track}
      selectedStyle={
        disabled ? styles.disabledSelectedTrack : styles.selectedTrack
      }
      onValuesChange={([value]) => handleChangeValue(value)}
    />
  );
}

const Marker = ({ pressed, enabled }: MarkerProps) => (
  <View
    style={[
      styles.marker,
      pressed && enabled && styles.markerPressed,
      !enabled && styles.disabledMarker,
    ]}
  />
);

const styles = StyleSheet.create({
  track: {
    height: wScale(6),
    borderRadius: wScale(10),
    backgroundColor: gray[200],
  },
  selectedTrack: {
    height: wScale(6),
    borderRadius: wScale(10),
    backgroundColor: theme.primary,
  },
  disabledTrack: {
    height: wScale(6),
    borderRadius: wScale(10),
    backgroundColor: gray[100],
  },
  disabledSelectedTrack: {
    height: wScale(6),
    borderRadius: wScale(10),
    backgroundColor: gray[300],
  },
  marker: {
    width: wScale(30),
    height: wScale(30),
    marginTop: wScale(5),
    borderRadius: wScale(20),
    backgroundColor: theme.primary,
    borderWidth: wScale(3),
    borderColor: theme.white,
  },
  markerPressed: {
    transform: [{ scale: 1.3 }],
  },
  disabledMarker: {
    backgroundColor: gray[300],
  },
});
