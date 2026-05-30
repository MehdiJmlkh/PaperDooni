import { useQuery } from "@tanstack/react-query";
import articleService from "../services/articleService";

export const useArticles = (page: number, size: number) => {
  return useQuery({
    queryKey: ["articles", page, size],
    queryFn: () => articleService.getArticles(page, size),
  });
};
