package ir.ac.ut.ece.ie.articles;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class ArticleRepositoryTest {
    @Autowired
    private ArticleRepository articleRepository;

    private List<Article> initialArticles;

    @BeforeEach
    void setUp() {
        var article1 = Article.builder()
                .title("search1").abs("abs1")
                .body("body1").year(2025)
                .citations(new ArrayList<>())
                .citedBy(new ArrayList<>())
                .build();

        var article2 = Article.builder()
                .title("search2").abs("abs2")
                .body("body2").year(2026)
                .citations(new ArrayList<>())
                .citedBy(new ArrayList<>())
                .build();

        var article3 = Article.builder()
                .title("title3").abs("search3")
                .body("body3").year(2024)
                .citations(new ArrayList<>())
                .citedBy(new ArrayList<>())
                .build();

        var article4 = Article.builder()
                .title("title4").abs("abs4")
                .body("search4").year(2023)
                .citations(new ArrayList<>())
                .citedBy(new ArrayList<>())
                .build();

        article1.addCitation(article2);
        article1.addCitation(article3);
        article2.addCitation(article2);

        articleRepository = new ArticleRepository();
        articleRepository.addArticle(article1);
        articleRepository.addArticle(article2);
        articleRepository.addArticle(article3);
        articleRepository.addArticle(article4);

        initialArticles = List.of(article1, article2,
                article3, article4);
    }

    @Test
    void containsSearchText_emptySearchText_returnsAllArticlesSortedByCitations() {
        var articlePage = articleRepository.containsSearchText("", 1, 4);
        var articles = articlePage.content;
        assertEquals(4, articles.size());
        assertEquals(initialArticles.get(1), articles.get(0));
        assertEquals(initialArticles.get(2), articles.get(1));
        assertEquals(initialArticles.get(0), articles.get(2));
        assertEquals(initialArticles.get(3), articles.get(3));
    }

    @Test
    void containsSearchText_emptySearchTextAndFirstPage_returnsAllArticlesSortedByCitations() {
        var articlePage = articleRepository.containsSearchText("", 1, 2);
        var articles = articlePage.content;
        assertEquals(2, articles.size());
        assertEquals(initialArticles.get(1), articles.get(0));
        assertEquals(initialArticles.get(2), articles.get(1));
    }

    @Test
    void containsSearchText_emptySearchTextAndLastPage_returnsAllArticlesSortedByCitations() {
        var articlePage = articleRepository.containsSearchText("", 2, 3);
        var articles = articlePage.content;
        assertEquals(1, articles.size());
        assertEquals(initialArticles.get(3), articles.get(0));
    }

    @Test
    void containsSearchText_nonEmptySearchText_returnsFilteredArticles() {
        var articlePage = articleRepository.containsSearchText("search", 1, 4);
        var articles = articlePage.content;
        assertEquals(3, articles.size());
        assertEquals(initialArticles.get(1), articles.get(0));
        assertEquals(initialArticles.get(0), articles.get(1));
        assertEquals(initialArticles.get(2), articles.get(2));
    }

    @Test
    void containsSearchText_nonEmptySearchTextAndFirstPage_returnsFirstPageOfFilteredArticles() {
        var articlePage = articleRepository.containsSearchText("search", 1, 2);
        var articles = articlePage.content;
        assertEquals(2, articles.size());
        assertEquals(initialArticles.get(1), articles.get(0));
        assertEquals(initialArticles.get(0), articles.get(1));
    }

    @Test
    void containsSearchText_nonEmptySearchTextAndLastPage_returnsLastPageOfFilteredArticles() {
        var articlePage = articleRepository.containsSearchText("search", 2, 2);
        var articles = articlePage.content;
        assertEquals(1, articles.size());
        assertEquals(initialArticles.get(2), articles.get(0));
    }
}
