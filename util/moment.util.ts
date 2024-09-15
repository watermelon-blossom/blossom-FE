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

export const getMatchesDate = (time: string) => {
  const parsedTime = moment(time, moment.ISO_8601, true);
  if (!parsedTime.isValid()) {
    console.error("Invalid date format:", time);
    return "Invalid date"; // 유효하지 않은 날짜 포맷 처리
  }

  const diffDays = moment().diff(parsedTime, "days");

  if (diffDays === 0) {
    return "오늘";
  } else if (diffDays === 1) {
    return "어제";
  } else if (diffDays < 7) {
    return `${diffDays}일 전`;
  } else {
    return parsedTime.format(MOMENT_DATE_KOREAN_FORMAT);
  }
};
