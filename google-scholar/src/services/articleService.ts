import apiClient from "./apiClient";

export interface ArticleSummary {
  title: string;
  abs: string;
  body: string;
  year: number;
  citedBy: number;
}

class ArticleService {
  getArticles() {
    return apiClient.get<ArticleSummary[]>("/articles").then((res) => res.data);
  }
}

export default new ArticleService();
