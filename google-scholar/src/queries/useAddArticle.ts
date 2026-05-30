import { useMutation } from "@tanstack/react-query";
import articleService, {
  AddArticleRequest,
  ArticleSummary,
} from "../services/articleService";

export const useAddArticle = () => {
  return useMutation<ArticleSummary, Error, AddArticleRequest>({
    mutationFn: articleService.addArticle,
  });
};
