import { useMutation, useQueryClient } from "@tanstack/react-query";
import userService, { User } from "../services/userService";

export const useEditEmail = () => {
  const queryClient = useQueryClient();
  return useMutation<any, string, string>({
    mutationFn: userService.editEmail,
    onSuccess: (_, newEmail) => {
      queryClient.setQueryData<User>(["user"], (oldUser?: User) => {
        if (!oldUser) return oldUser;

        return { ...oldUser, email: newEmail };
      });
    },
  });
};
