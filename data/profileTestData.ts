type Profile = {
  id: number;
  name: string;
  age: number;
  job: string;
  images: string[];
  matched: "matched" | "reject" | "yet";
  tendency: string;
  location: string;
  distance: number;
  about: string;
  questions: {
    question: string;
    answer: string;
  }[];
};

export const profiles: Profile[] = [
  {
    id: 1,
    name: "쵸단",
    age: 25,
    job: "인플루언서",
    images: [
      "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/10/18/ed44fa35-baa3-4269-afa9-e0fa4d101817.jpg",
      "https://i.namu.wiki/i/Nat7R8m76ArARjdLnZ6OPkbaleF62cjL6sFE5sNlIcrv7Jeyz62Rc14YqTn4Jrn8VOpokZl4Dp53a5mpxsBoKg.webp",
      "https://cdn.todayflow.co.kr/news/photo/202303/436_2127_5848.jpg",
    ],
    matched: "yet",
    tendency: "당당한",
    location: "서울",
    distance: 1,
    about:
      "안녕하세요! 저는 쵸단이라고 해요. 호기심 많은 탐험가이자 새로운 경험을 즐기는 모험가입니다. 언제나 새로운 도전을 기다리며, 세상의 다양한 이야기를 나누고 싶어요. 함께 즐거운 시간을 만들어가요! 😊",
    questions: [
      {
        question:
          "당신은 마법의 문을 발견했습니다. 이 문을 열면 어떤 세상으로 들어가고 싶나요?\n\n1. 신나는 마법의 축제 마을\n2. 조용한 도서관",
        answer: "신나는 마법의 축제 마을",
      },
      {
        question:
          "당신은 시간을 여행할 수 있는 기회를 얻게 되었습니다. 어떤 여행을 선택하시겠습니까?\n\n1. 과거의 역사 속으로\n2. 미래의 세계를 탐험",
        answer: "미래의 세계를 탐험",
      },
      {
        question:
          "당신은 마법 학교의 교장이 되어 중요한 결정을 내려야 합니다. 어떻게 결정을 내리시겠습니까?\n\n1. 논리적으로 결정\n2. 감정적으로 결정",
        answer: "감정적으로 결정",
      },
      {
        question:
          "당신은 보물찾기 대회에 참가하게 되었습니다. 어떻게 대회에 임하시겠습니까?\n\n1. 단계별 계획 설립\n2. 즉흥적으로 유연하게",
        answer: "단계별 계획 설립",
      },
    ],
  },
  {
    id: 2,
    name: "쵸단",
    age: 25,
    job: "인플루언서",
    images: [
      "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/10/18/ed44fa35-baa3-4269-afa9-e0fa4d101817.jpg",
      "https://i.namu.wiki/i/Nat7R8m76ArARjdLnZ6OPkbaleF62cjL6sFE5sNlIcrv7Jeyz62Rc14YqTn4Jrn8VOpokZl4Dp53a5mpxsBoKg.webp",
      "https://cdn.todayflow.co.kr/news/photo/202303/436_2127_5848.jpg",
    ],
    matched: "yet",
    tendency: "당당한",
    location: "서울",
    distance: 1,
    about:
      "안녕하세요! 저는 쵸단이라고 해요. 호기심 많은 탐험가이자 새로운 경험을 즐기는 모험가입니다. 언제나 새로운 도전을 기다리며, 세상의 다양한 이야기를 나누고 싶어요. 함께 즐거운 시간을 만들어가요! 😊",
    questions: [
      {
        question:
          "당신은 마법의 문을 발견했습니다. 이 문을 열면 어떤 세상으로 들어가고 싶나요?\n\n1. 신나는 마법의 축제 마을\n2. 조용한 도서관",
        answer: "신나는 마법의 축제 마을",
      },
      {
        question:
          "당신은 시간을 여행할 수 있는 기회를 얻게 되었습니다. 어떤 여행을 선택하시겠습니까?\n\n1. 과거의 역사 속으로\n2. 미래의 세계를 탐험",
        answer: "미래의 세계를 탐험",
      },
      {
        question:
          "당신은 마법 학교의 교장이 되어 중요한 결정을 내려야 합니다. 어떻게 결정을 내리시겠습니까?\n\n1. 논리적으로 결정\n2. 감정적으로 결정",
        answer: "감정적으로 결정",
      },
      {
        question:
          "당신은 보물찾기 대회에 참가하게 되었습니다. 어떻게 대회에 임하시겠습니까?\n\n1. 단계별 계획 설립\n2. 즉흥적으로 유연하게",
        answer: "단계별 계획 설립",
      },
    ],
  },
  {
    id: 3,
    name: "쵸단",
    age: 25,
    job: "인플루언서",
    images: [
      "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/10/18/ed44fa35-baa3-4269-afa9-e0fa4d101817.jpg",
      "https://i.namu.wiki/i/Nat7R8m76ArARjdLnZ6OPkbaleF62cjL6sFE5sNlIcrv7Jeyz62Rc14YqTn4Jrn8VOpokZl4Dp53a5mpxsBoKg.webp",
      "https://cdn.todayflow.co.kr/news/photo/202303/436_2127_5848.jpg",
    ],
    matched: "yet",
    tendency: "당당한",
    location: "서울",
    distance: 1,
    about:
      "안녕하세요! 저는 쵸단이라고 해요. 호기심 많은 탐험가이자 새로운 경험을 즐기는 모험가입니다. 언제나 새로운 도전을 기다리며, 세상의 다양한 이야기를 나누고 싶어요. 함께 즐거운 시간을 만들어가요! 😊",
    questions: [
      {
        question:
          "당신은 마법의 문을 발견했습니다. 이 문을 열면 어떤 세상으로 들어가고 싶나요?\n\n1. 신나는 마법의 축제 마을\n2. 조용한 도서관",
        answer: "신나는 마법의 축제 마을",
      },
      {
        question:
          "당신은 시간을 여행할 수 있는 기회를 얻게 되었습니다. 어떤 여행을 선택하시겠습니까?\n\n1. 과거의 역사 속으로\n2. 미래의 세계를 탐험",
        answer: "미래의 세계를 탐험",
      },
      {
        question:
          "당신은 마법 학교의 교장이 되어 중요한 결정을 내려야 합니다. 어떻게 결정을 내리시겠습니까?\n\n1. 논리적으로 결정\n2. 감정적으로 결정",
        answer: "감정적으로 결정",
      },
      {
        question:
          "당신은 보물찾기 대회에 참가하게 되었습니다. 어떻게 대회에 임하시겠습니까?\n\n1. 단계별 계획 설립\n2. 즉흥적으로 유연하게",
        answer: "단계별 계획 설립",
      },
    ],
  },
  {
    id: 4,
    name: "쵸단",
    age: 25,
    job: "인플루언서",
    images: [
      "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/10/18/ed44fa35-baa3-4269-afa9-e0fa4d101817.jpg",
      "https://i.namu.wiki/i/Nat7R8m76ArARjdLnZ6OPkbaleF62cjL6sFE5sNlIcrv7Jeyz62Rc14YqTn4Jrn8VOpokZl4Dp53a5mpxsBoKg.webp",
      "https://cdn.todayflow.co.kr/news/photo/202303/436_2127_5848.jpg",
    ],
    matched: "yet",
    tendency: "당당한",
    location: "서울",
    distance: 1,
    about:
      "안녕하세요! 저는 쵸단이라고 해요. 호기심 많은 탐험가이자 새로운 경험을 즐기는 모험가입니다. 언제나 새로운 도전을 기다리며, 세상의 다양한 이야기를 나누고 싶어요. 함께 즐거운 시간을 만들어가요! 😊",
    questions: [
      {
        question:
          "당신은 마법의 문을 발견했습니다. 이 문을 열면 어떤 세상으로 들어가고 싶나요?\n\n1. 신나는 마법의 축제 마을\n2. 조용한 도서관",
        answer: "신나는 마법의 축제 마을",
      },
      {
        question:
          "당신은 시간을 여행할 수 있는 기회를 얻게 되었습니다. 어떤 여행을 선택하시겠습니까?\n\n1. 과거의 역사 속으로\n2. 미래의 세계를 탐험",
        answer: "미래의 세계를 탐험",
      },
      {
        question:
          "당신은 마법 학교의 교장이 되어 중요한 결정을 내려야 합니다. 어떻게 결정을 내리시겠습니까?\n\n1. 논리적으로 결정\n2. 감정적으로 결정",
        answer: "감정적으로 결정",
      },
      {
        question:
          "당신은 보물찾기 대회에 참가하게 되었습니다. 어떻게 대회에 임하시겠습니까?\n\n1. 단계별 계획 설립\n2. 즉흥적으로 유연하게",
        answer: "단계별 계획 설립",
      },
    ],
  },
  {
    id: 5,
    name: "쵸단",
    age: 25,
    job: "인플루언서",
    images: [
      "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/10/18/ed44fa35-baa3-4269-afa9-e0fa4d101817.jpg",
      "https://i.namu.wiki/i/Nat7R8m76ArARjdLnZ6OPkbaleF62cjL6sFE5sNlIcrv7Jeyz62Rc14YqTn4Jrn8VOpokZl4Dp53a5mpxsBoKg.webp",
      "https://cdn.todayflow.co.kr/news/photo/202303/436_2127_5848.jpg",
    ],
    matched: "yet",
    tendency: "당당한",
    location: "서울",
    distance: 1,
    about:
      "안녕하세요! 저는 쵸단이라고 해요. 호기심 많은 탐험가이자 새로운 경험을 즐기는 모험가입니다. 언제나 새로운 도전을 기다리며, 세상의 다양한 이야기를 나누고 싶어요. 함께 즐거운 시간을 만들어가요! 😊",
    questions: [
      {
        question:
          "당신은 마법의 문을 발견했습니다. 이 문을 열면 어떤 세상으로 들어가고 싶나요?\n\n1. 신나는 마법의 축제 마을\n2. 조용한 도서관",
        answer: "신나는 마법의 축제 마을",
      },
      {
        question:
          "당신은 시간을 여행할 수 있는 기회를 얻게 되었습니다. 어떤 여행을 선택하시겠습니까?\n\n1. 과거의 역사 속으로\n2. 미래의 세계를 탐험",
        answer: "미래의 세계를 탐험",
      },
      {
        question:
          "당신은 마법 학교의 교장이 되어 중요한 결정을 내려야 합니다. 어떻게 결정을 내리시겠습니까?\n\n1. 논리적으로 결정\n2. 감정적으로 결정",
        answer: "감정적으로 결정",
      },
      {
        question:
          "당신은 보물찾기 대회에 참가하게 되었습니다. 어떻게 대회에 임하시겠습니까?\n\n1. 단계별 계획 설립\n2. 즉흥적으로 유연하게",
        answer: "단계별 계획 설립",
      },
    ],
  },
  {
    id: 6,
    name: "쵸단",
    age: 25,
    job: "인플루언서",
    images: [
      "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/10/18/ed44fa35-baa3-4269-afa9-e0fa4d101817.jpg",
      "https://i.namu.wiki/i/Nat7R8m76ArARjdLnZ6OPkbaleF62cjL6sFE5sNlIcrv7Jeyz62Rc14YqTn4Jrn8VOpokZl4Dp53a5mpxsBoKg.webp",
      "https://cdn.todayflow.co.kr/news/photo/202303/436_2127_5848.jpg",
    ],
    matched: "yet",
    tendency: "당당한",
    location: "서울",
    distance: 1,
    about:
      "안녕하세요! 저는 쵸단이라고 해요. 호기심 많은 탐험가이자 새로운 경험을 즐기는 모험가입니다. 언제나 새로운 도전을 기다리며, 세상의 다양한 이야기를 나누고 싶어요. 함께 즐거운 시간을 만들어가요! 😊",
    questions: [
      {
        question:
          "당신은 마법의 문을 발견했습니다. 이 문을 열면 어떤 세상으로 들어가고 싶나요?\n\n1. 신나는 마법의 축제 마을\n2. 조용한 도서관",
        answer: "신나는 마법의 축제 마을",
      },
      {
        question:
          "당신은 시간을 여행할 수 있는 기회를 얻게 되었습니다. 어떤 여행을 선택하시겠습니까?\n\n1. 과거의 역사 속으로\n2. 미래의 세계를 탐험",
        answer: "미래의 세계를 탐험",
      },
      {
        question:
          "당신은 마법 학교의 교장이 되어 중요한 결정을 내려야 합니다. 어떻게 결정을 내리시겠습니까?\n\n1. 논리적으로 결정\n2. 감정적으로 결정",
        answer: "감정적으로 결정",
      },
      {
        question:
          "당신은 보물찾기 대회에 참가하게 되었습니다. 어떻게 대회에 임하시겠습니까?\n\n1. 단계별 계획 설립\n2. 즉흥적으로 유연하게",
        answer: "단계별 계획 설립",
      },
    ],
  },
];
