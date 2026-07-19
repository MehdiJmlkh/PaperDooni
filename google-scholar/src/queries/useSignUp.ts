import { useMutation } from "@tanstack/react-query";
import userService, { SignUpRequest } from "../services/userService";

export const useSignUp = () =>
  useMutation<any, SignUpRequest, SignUpRequest>({
    mutationFn: userService.signUp,
  });
