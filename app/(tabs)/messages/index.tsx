import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import CText from "@/components/ui/CText";
import TextInput from "@/components/ui/TextInput";
import SvgIcon from "@/components/ui/SvgIcon";
import ChattingItem, {
  ChattingItem as ChattingItemType,
} from "@/components/ui/ChattingItem";

import { wScale } from "@/util/responsive.util";
import { gray } from "@/constants/colors";
import { CHATTING_LIST_TEST_DATA } from "@/data/chattingListTestData";
import { router } from "expo-router";

export default function messages() {
  const [userInput, setUserInput] = useState("");
  const filteredData = CHATTING_LIST_TEST_DATA.filter((item) =>
    item.name.includes(userInput)
  );

  const handlePressItem = (item: ChattingItemType) => {
    const selectedUserData = JSON.stringify(item);

    router.navigate(
      `/messages/${item.id}?data=${encodeURIComponent(selectedUserData)}`
    );
  };

  const handleChangeInput = (_: string, text: string) => {
    setUserInput(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        name="userInput"
        value={userInput}
        height={wScale(48)}
        placeholder="Search"
        icon={<SvgIcon name="search" size={wScale(20)} fill="gray" />}
        onChangeText={handleChangeInput}
      />

      <FlatList
        contentContainerStyle={styles.list}
        data={filteredData}
        ListHeaderComponent={() => <CText style={styles.title}>Messages</CText>}
        renderItem={({ item }) => (
          <ChattingItem
            name={item.name}
            count={item.count}
            lastMessage={item.lastMessage}
            uri={item.uri}
            time={item.time}
            onPress={() => handlePressItem(item)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    paddingHorizontal: wScale(20),
    marginBottom: wScale(15),
  },
  list: {
    paddingHorizontal: wScale(20),
  },
  title: {
    paddingTop: wScale(15),
    paddingBottom: wScale(20),
  },
  separator: {
    height: wScale(1),
    marginLeft: wScale(70),
    backgroundColor: gray[100],
  },
});
