import { useMutation, useQuery } from "@tanstack/react-query";
import authService, { LoginRequest } from "../services/authService";

interface LoginResponse {
  token: string;
}

export const useLogin = () =>
  useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: authService.login,
  });
