import { useQuery } from "@tanstack/react-query";
import articleService from "../services/articleService";

export const useArticles = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: articleService.getArticles,
  });
};
