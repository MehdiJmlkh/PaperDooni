import { useMutation } from "@tanstack/react-query";
import userService from "../services/userService";

export const useEditEmail = () => {
  return useMutation({
    mutationFn: userService.editEmail,
  });
};
