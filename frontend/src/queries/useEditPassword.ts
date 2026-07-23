import { useMutation } from "@tanstack/react-query";
import userService from "../services/userService";

export const useEditPassword = () =>
  useMutation<any, string, string>({
    mutationFn: userService.editPassword,
  });
