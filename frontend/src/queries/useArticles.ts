import { useQuery } from "@tanstack/react-query";
import articleService from "../services/articleService";
import { articleKeys } from "./queryKeys";

export const useArticles = (searchText: string, page: number, size: number) => {
  return useQuery({
    queryKey: articleKeys.list(searchText, page, size),
    queryFn: () => articleService.getArticles(searchText, page, size),
  });
};
  