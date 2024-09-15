import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { Image } from "expo-image";
import moment from "moment";

import useScrollControl from "@/hooks/useScrollControl";

import ChatBox, { Chat } from "@/components/ui/ChatBox";
import { ChattingItem } from "@/components/ui/ChattingItem";
import CText from "@/components/ui/CText";
import Header from "@/components/ui/Header";
import IconButton from "@/components/ui/IconButton";
import TextInput from "@/components/ui/TextInput";

import { gray, systemColor, theme } from "@/constants/colors";
import { getChatTime, getDateKorean } from "@/util/moment.util";
import { wScale } from "@/util/responsive.util";

import { CHATTING_TEST_DATA, getChats } from "@/data/chattingTestData";
import useSocket from "@/api/ws/useSocket";
const ME_ID = "5";
const ROOM_ID = "66e68eb2757c7a6014840b39";

export default function chatIndex() {
  const { id, data } = useLocalSearchParams();
  const { uri, name } = JSON.parse(
    decodeURIComponent(data as string)
  ) as ChattingItem;
  const navigation = useNavigation("/(tabs)");
  const socket = useSocket(ROOM_ID);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [isFirst, setIsFirst] = useState(true);
  const [isOnline, setIsOnline] = useState(false);
  const [chatData, setChatData] = useState<Chat[]>([]);
  const [userInput, setUserInput] = useState("");
  const flatListRef = useRef<FlatList>(null);
  const { goToTop } = useScrollControl(flatListRef, chatData);

  useEffect(() => {
    // TODO: api
    // online status, chat history

    Math.random() > 0.5 && setIsOnline(true);
    // setChatData(CHATTING_TEST_DATA);
  }, []);

  useEffect(() => {
    if (!flatListRef.current || !(chatData.length > 0) || !isFirst) return;
    flatListRef.current.scrollToOffset({ offset: 0, animated: false });
    setIsFirst(false);
  }, [chatData]);

  const sendMessage = () => {
    if (!socket) return;

    const newChat: any = {
      roomId: ROOM_ID,
      contentType: "TEXT",
      senderId: ME_ID,
      content: userInput,
    };

    socket.emit("send", newChat);

    // setChatData([newChat, ...chatData.slice(0, 20)]);
    setUserInput("");
    goToTop((prev) => !prev);
  };

  const sendVoice = () => {
    console.log("send voice");

    // TODO
  };

  const loadMore = () => {
    console.log("load more");

    // TODO: api

    // setChatData([...chatData, ...getChats()]);
  };

  const handleChangeInput = (_: string, text: string) => {
    setUserInput(text);
  };

  return (
    <View style={styles.container}>
      <Header
        left={<IconButton iconName="back" onPress={() => router.back()} />}
        title={
          <View style={styles.center}>
            <Image style={styles.img} source={{ uri }} contentFit="cover" />
            <View style={styles.nameWrapper}>
              <CText size="lg">{name}</CText>
              <CText style={styles.onlineText} size="xs" color={gray[200]}>
                {isOnline ? "Online" : "Offline"}
              </CText>
              <View style={[styles.dot, isOnline && styles.onlineDot]} />
            </View>
          </View>
        }
        right={<IconButton iconName="more" iconColor={theme.black} />}
      />

      <FlatList
        ref={flatListRef}
        contentContainerStyle={styles.chattings}
        data={chatData}
        renderItem={({ item, index }) => {
          const isSameTime =
            index > 0 &&
            getChatTime(chatData[index - 1].time) === getChatTime(item.time);
          const isOverDay =
            index > 0 &&
            getDateKorean(chatData[index - 1].time) !==
              getDateKorean(item.time);

          return (
            <>
              {isOverDay && (
                <View style={styles.dateWrapper}>
                  <View style={styles.separater} />
                  <View style={styles.dateTextWrapper}>
                    <CText style={styles.dateText} size="sm">
                      {getDateKorean(chatData[index - 1].time)}
                    </CText>
                  </View>
                </View>
              )}
              <ChatBox
                type={item.fromId === ME_ID ? "ME" : "OTHER"}
                message={item.message}
                time={item.time}
                hasRead={item.hasRead}
                showTime={!isSameTime}
              />
            </>
          );
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMore}
        onEndReachedThreshold={0.25}
        inverted
        windowSize={5} // 기본값은 21
        initialNumToRender={10}
        // ListFooterComponent={
        // <View>{chatData.length ? <ActivityIndicator /> : null}</View>
        // }
      />

      <View style={styles.input}>
        <TextInput
          name="userInput"
          value={userInput}
          placeholder="메시지를 입력하세요"
          width={wScale(275)}
          height={wScale(48)}
          onChangeText={handleChangeInput}
          // onSubmitEditing={userInput ? sendMessage : sendVoice}
        />
        <IconButton
          iconName={userInput ? "send" : "voice"}
          onPress={userInput ? sendMessage : sendVoice}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flexDirection: "row",
    alignItems: "center",
    gap: wScale(16),
    width: wScale(160),
  },
  nameWrapper: {
    gap: wScale(5),
  },
  img: {
    width: wScale(52),
    height: wScale(52),
    borderRadius: wScale(26),
  },
  onlineText: {
    marginLeft: wScale(10),
  },
  dot: {
    position: "absolute",
    left: 0,
    bottom: wScale(6),
    width: wScale(6),
    height: wScale(6),
    borderRadius: wScale(3),
    backgroundColor: gray[200],
  },
  onlineDot: {
    backgroundColor: systemColor.success,
  },
  chattings: {
    gap: wScale(10),
    padding: wScale(20),
    paddingBottom: wScale(36),
  },
  input: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: wScale(20),
  },
  listFooter: {
    height: wScale(16),
  },
  dateWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: wScale(24),
    marginBottom: wScale(16),
  },
  separater: {
    width: "100%",
    height: 1,
    backgroundColor: gray[100],
  },
  dateTextWrapper: {
    position: "absolute",
    top: wScale(-6),
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  dateText: {
    backgroundColor: theme.white,
    paddingHorizontal: wScale(12),
  },
});
