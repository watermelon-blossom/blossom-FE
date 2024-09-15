import axiosInstance from "../axiosInterceptor";
import { UserProfile } from "./userProfile.type";
import { UserService } from "./userService.type";

export const user = {
  getProfile: async (myId: number, userId: number): Promise<UserProfile> => {
    return await axiosInstance
      .get(`/user-service/profile?userId=${myId}&targetUserId=${userId}`)
      .then((res) => res.data);
  },
};
