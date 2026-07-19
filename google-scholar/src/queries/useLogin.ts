import { useMutation, useQuery } from "@tanstack/react-query";
import authService, { LoginRequest } from "../services/authService";

export const useLogin = () =>
  useMutation({
    mutationFn: authService.login,
  });
