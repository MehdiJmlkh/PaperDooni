import { useQuery } from "@tanstack/react-query";
import userService, { User } from "../services/userService";

export const useCurrentUser = () =>
  useQuery<User>({
    queryKey: ["user"],
    queryFn: userService.me,
  });
