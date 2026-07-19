import { useMutation } from "@tanstack/react-query";
import userService from "../services/userService";

export const useSignUp = () =>
  useMutation({
    mutationFn: userService.signUp,
  });
