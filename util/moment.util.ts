import moment from "moment";

export const MOMENT_CHAT_TIME_FORMAT = "hh:mm A";
export const MOMENT_DATE_KOREAN_FORMAT = "YYYY년 M월 DD일";

export const getChatTime = (time: string) =>
  moment(time).format(MOMENT_CHAT_TIME_FORMAT);

export const getDateKorean = (time: string) => {
  const parsedTime = moment(time, moment.ISO_8601, true);
  if (!parsedTime.isValid()) {
    console.error("Invalid date format:", time);
    return "Invalid date"; // 유효하지 않은 날짜 포맷 처리
  }

  return moment(time).format(MOMENT_DATE_KOREAN_FORMAT);
};
