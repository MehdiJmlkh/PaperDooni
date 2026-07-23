import { useMutation } from "@tanstack/react-query";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      navigate("/sign-in");
    },
  });
};
