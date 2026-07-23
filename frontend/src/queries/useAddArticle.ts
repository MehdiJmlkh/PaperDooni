import { useMutation, useQueryClient } from "@tanstack/react-query";
import articleService, {
  AddArticleRequest,
  ArticleSummary,
} from "../services/articleService";
import { articleKeys } from "./queryKeys";

export const useAddArticle = () => {
  const queryClient = useQueryClient();
  return useMutation<ArticleSummary, Error, AddArticleRequest>({
    mutationFn: articleService.addArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: articleKeys.all,
      });
    },
  });
};
