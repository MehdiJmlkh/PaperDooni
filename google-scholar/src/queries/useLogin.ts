import { useQuery } from "@tanstack/react-query";
import authService, { LoginRequest } from "../services/authService";

export const useLogin = (request: LoginRequest) =>
  useQuery({
    queryKey: ["auth", request.username],
    queryFn: () => authService.login(request),
  });
