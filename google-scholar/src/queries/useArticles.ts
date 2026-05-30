import { useQuery } from "@tanstack/react-query";
import articleService from "../services/articleService";

export const useArticles = (searchText: string, page: number, size: number) => {
  return useQuery({
    queryKey: ["articles", searchText, page, size],
    queryFn: () => articleService.getArticles(searchText, page, size),
  });
};
