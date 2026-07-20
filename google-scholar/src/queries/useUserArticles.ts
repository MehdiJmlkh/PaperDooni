import { useQuery } from "@tanstack/react-query";
import userService from "../services/userService";
import { ArticleSummary } from "../services/articleService";

export const useUserArticles = () =>
  useQuery<ArticleSummary[]>({
    queryKey: ["user", "articles"],
    queryFn: userService.getArtciles,
  });
