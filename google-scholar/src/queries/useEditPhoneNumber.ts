import { useMutation, useQueryClient } from "@tanstack/react-query";
import userService, { User } from "../services/userService";

export const useEditPhoneNumber = () => {
  const queryClient = useQueryClient();
  return useMutation<any, string, string>({
    mutationFn: userService.editPhoneNumber,
    onSuccess: (_, newPhoneNumber) => {
      queryClient.setQueriesData(["user"], (oldUser?: User) => {
        if (!oldUser) return oldUser;

        return { ...oldUser, phoneNumber: newPhoneNumber };
      });
    },
  });
};
