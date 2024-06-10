import React, { useState } from "react";
import {
  Alert,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { theme, gray } from "@/constants/colors";
import SvgIcon from "./SvgIcon";
import { wScale } from "@/util/responsive.util";

export default function AvatarInput() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "권한 필요",
        "사진을 선택하려면 권한이 필요합니다. \n사진 권한을 모두 허용으로 설정해 주세요.",
        [
          { text: "취소", style: "cancel" },
          { text: "설정으로 가기", onPress: () => Linking.openSettings() },
        ]
      );
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={pickImage}
        style={({ pressed }) => pressed && styles.pressed}
      >
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : (
          <SvgIcon name="people" fill={theme.white} size={wScale(70)} />
        )}
      </Pressable>

      <Pressable style={styles.iconWrapper} onPress={pickImage}>
        <SvgIcon name="camera" fill={theme.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: wScale(100),
    height: wScale(100),
    backgroundColor: gray[200],
    borderRadius: wScale(25),
  },
  pressed: {
    opacity: 0.7,
  },
  image: {
    width: wScale(100),
    height: wScale(100),
    borderRadius: wScale(25),
  },
  iconWrapper: {
    position: "absolute",
    bottom: wScale(-5),
    right: wScale(-5),
    width: wScale(34),
    height: wScale(34),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.primary,
    borderWidth: wScale(1.5),
    borderColor: theme.white,
    borderRadius: wScale(100),
    zIndex: 3000,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
