import apiClient from "./apiClient";

export interface ArticleSummary {
  id: number;
  title: string;
  abs: string;
  year: number;
  citedBy: number;
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

class ArticleService {
  getArticles() {
    return apiClient.get<ArticleSummary[]>("/articles").then((res) => res.data);
  }

  getArticle(id: number) {
    return apiClient.get<Article>(`/articles/${id}`).then((res) => res.data);
  }
}

export default new ArticleService();
