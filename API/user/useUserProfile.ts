import { useQuery } from "@tanstack/react-query";
import { user } from "./user.query";
import { UserProfile } from "./userProfile.type";

export const useUserProfile = (myId: number, userId: number) => {
  const {
    data: userProfile,
    error: userProfileError,
    isLoading: isUserProfileLoading,
  } = useQuery({
    queryKey: ["userProfile", myId, userId],
    queryFn: () => user.getProfile(myId, userId),
    staleTime: 1000 * 60 * 5, // 5분 임시
    gcTime: 1000 * 60 * 60, // 1시간 임시
  });

  return { userProfile, userProfileError, isUserProfileLoading };
};
