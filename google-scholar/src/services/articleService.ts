import apiClient from "./apiClient";

export interface ArticleSummary {
  id: number;
  title: string;
  abs: string;
  year: number;
  citedBy: number;
}

export interface ArticlePage {
  content: ArticleSummary[];
  total: number;
}

export interface Citation {
  id: number;
  title: string;
}

export interface Article {
  id: number;
  title: string;
  abs: string;
  body: string;
  year: number;
  citations: Citation[];
}

export interface AddArticleRequest {
  title: string;
  abs: string;
  body: string;
  year: number;
  citations: number[];
}

class ArticleService {
  getArticles(searchText: string, page: number, size: number) {
    return apiClient
      .get<ArticlePage>("/articles", { params: { searchText, page, size } })
      .then((res) => res.data);
  }

  getArticle(id: number) {
    return apiClient.get<Article>(`/articles/${id}`).then((res) => res.data);
  }

  addArticle(article: AddArticleRequest) {
    return apiClient
      .post("articles", article)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err.response.data.error);
      });
  }
}

export default new ArticleService();
