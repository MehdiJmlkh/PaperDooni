import { useQuery } from "@tanstack/react-query";
import articleService from "../services/articleService";
import { articleKeys } from "./queryKeys";

export const useArticle = (id: number) => {
  return useQuery({
    queryKey: articleKeys.single(id),
    queryFn: () => articleService.getArticle(id),
  });
};
