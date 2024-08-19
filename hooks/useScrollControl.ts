import { Chat } from "@/components/ui/ChatBox";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";

export default function useScrollControl(
  ref: React.RefObject<FlatList>,
  chatData: Chat[]
) {
  const [toTopSwitch, goToTop] = useState(false);
  const [toBottomSwitch, goToBottom] = useState(false);

  useEffect(() => {
    if (!ref.current || !(chatData.length > 0)) return;
    ref.current.scrollToOffset({ offset: 0, animated: false });
  }, [toTopSwitch]);

  useEffect(() => {
    if (!ref.current || !(chatData.length > 0)) return;
    ref.current.scrollToEnd({ animated: true });
  }, [toBottomSwitch]);

  return { goToTop, goToBottom };
}
