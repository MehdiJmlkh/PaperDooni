import { useQuery } from "@tanstack/react-query";
import articleService from "../services/articleService";

export const useArticle = (id: number) => {
  return useQuery({
    queryKey: ["articles", id],
    queryFn: () => articleService.getArticle(id),
  });
};
