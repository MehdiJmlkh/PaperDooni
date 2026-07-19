import { useMutation, useQuery } from "@tanstack/react-query";
import authService, { LoginRequest } from "../services/authService";
import { useNavigate } from "react-router-dom";

interface LoginResponse {
  token: string;
}

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: authService.login,
    onSuccess: (response: LoginResponse) => {
      localStorage.setItem("accessToken", response.token);
      navigate("/");
    },
  });
};
