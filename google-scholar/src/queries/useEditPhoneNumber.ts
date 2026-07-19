import { useMutation } from "@tanstack/react-query";
import userService from "../services/userService";

export const useEditPhoneNumber = () =>
  useMutation<any, string, string>({
    mutationFn: userService.editPhoneNumber,
  });
