import { ChattingItem } from "@/components/ui/ChattingItem";
import moment from "moment";

export const CHATTING_LIST_TEST_DATA: ChattingItem[] = [
  {
    name: "이시연",
    count: 123,
    lastMessage: "아저씨 누군데요!!!",
    uri: "https://cdn.news-ade.com/newsaid/2024/05/20180005/%EC%9D%B4%EC%8B%9C%EC%97%B02.jpg",
    time: moment().toISOString(),
  },
  {
    name: "냥뇽녕냥",
    count: 4,
    lastMessage: "헛! 둘~ 셋~ 넷!",
    uri: "https://yt3.googleusercontent.com/qk2uweubvIxGw9ylPEK8KyeKuNN2IZHXpF_d7rUAQlWBHc7V7abqxQoANoCBycDzDxMSZ9xt=s900-c-k-c0x00ffffff-no-rj",
    time: moment().subtract(3, "minute").toISOString(),
  },
  {
    name: "마젠타",
    count: 1,
    lastMessage: "아니 요즘 진짜 베이스 연습하느라 손꾸락이 너무 아파!!",
    uri: "https://image.fmkorea.com/files/attach/new3/20230918/494354581/4872395369/6195066906/99b983892094b5c6d2fc3736e15da7d1.jpeg",
    time: moment().subtract(2, "hour").toISOString(),
  },
  {
    name: "초단",
    count: 12,
    lastMessage: "삐약~ 삐약~ 병아리~",
    uri: "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/10/18/ed44fa35-baa3-4269-afa9-e0fa4d101817.jpg",
    time: moment().subtract(1, "day").toISOString(),
  },
  {
    name: "우정잉",
    count: 0,
    lastMessage: "꽁꽁 얼어붙은 한강 위로 고양이가 걸어다닙니다.",
    uri: "https://static-cdn.jtvnw.net/jtv_user_pictures/7d566eba-dda1-4b08-b141-a8314b7f989b-profile_image-300x300.png",
    time: moment().subtract(10, "day").toISOString(),
  },
  {
    name: "유익병",
    count: 0,
    lastMessage: "시부레~! 지랄하고 자빠졌네! 시부레~! 시부레~!",
    uri: "https://cdnweb01.wikitree.co.kr/webdata/editor/202305/29/img_20230529135117_467ae765.webp",
    time: moment().subtract(31, "day").toISOString(),
  },
  {
    name: "아이유",
    count: 2,
    lastMessage: "이 노래 어때요?",
    uri: "https://img.tvreportcdn.de/cms-content/uploads/2023/10/06/becfe7e9-e863-453a-9a18-3ef1e4597b1f.jpg",
    time: moment().subtract(2, "day").toISOString(),
  },
  {
    name: "마레 플로스",
    count: 0,
    lastMessage: "제 목표는 드래곤과 인간의 원만한 관계를 위하여 ",
    uri: "https://pbs.twimg.com/media/FHtCXy7aUAAQ1nk.jpg:large",
    time: "2023-07-10T14:00:00Z",
  },
  {
    name: "장원영",
    count: 0,
    lastMessage: "안녕하세요~",
    uri: "https://sports.hankooki.com/news/photo/202111/img_6748965_0.jpg",
    time: moment().subtract(121, "day").toISOString(),
  },
];
