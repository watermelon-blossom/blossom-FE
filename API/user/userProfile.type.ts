import { RelationshopStatus } from "@/types/common.type";

export type UserProfile = {
  id: number;
  UserName: string;
  job: string;
  tendency: string;
  userDescription: string;
  questionInfos: {
    question: string;
    answer: string;
  }[];
  sex: string;
  age: number;
  distance: number;
  location: string;
  photos: string[];
  relationshipStatus: RelationshopStatus;
};
