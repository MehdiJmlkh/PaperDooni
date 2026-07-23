import { useMutation } from "@tanstack/react-query";
import userService, { SignUpRequest } from "../services/userService";
import { useLogin } from "./useLogin";

export const useSignUp = () => {
  const login = useLogin();

  return useMutation<any, SignUpRequest, SignUpRequest>({
    mutationFn: userService.signUp,
    onSuccess: (response, request) => {
      login.mutate({ username: request.username, password: request.password });
    },
  });
};
