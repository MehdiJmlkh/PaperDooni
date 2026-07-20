import { useMutation } from "@tanstack/react-query";
import userService from "../services/userService";

export const useEditEmail = () => {
  return useMutation<any, string, string>({
    mutationFn: userService.editEmail,
  });
};
