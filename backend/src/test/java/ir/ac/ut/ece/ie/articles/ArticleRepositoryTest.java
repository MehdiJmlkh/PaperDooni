package ir.ac.ut.ece.ie.articles;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.domain.PageRequest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
class ArticleRepositoryTest {

    @Autowired
    private ArticleRepository articleRepository;

    private Article article1;
    private Article article2;
    private Article article3;
    private Article article4;

    @BeforeEach
    void setUp() {
        articleRepository.deleteAll();

        article1 = Article.builder()
                .title("searchText Title 1")
                .abs("abs1")
                .body("body1")
                .year(2025)
                .citations(new ArrayList<>())
                .citedBy(new ArrayList<>())
                .build();

        article2 = Article.builder()
                .title("searchText Title 2")
                .abs("abs2")
                .body("body2")
                .year(2026)
                .citations(new ArrayList<>())
                .citedBy(new ArrayList<>())
                .build();

        article3 = Article.builder()
                .title("title3")
                .abs("searchText Abstract 3")
                .body("body3")
                .year(2024)
                .citations(new ArrayList<>())
                .citedBy(new ArrayList<>())
                .build();

        article4 = Article.builder()
                .title("title4")
                .abs("abs4")
                .body("searchText Body 4")
                .year(2023)
                .citations(new ArrayList<>())
                .citedBy(new ArrayList<>())
                .build();

        articleRepository.saveAll(List.of(article1, article2, article3, article4));

        article1.addCitation(article2);
        article1.addCitation(article3);

        articleRepository.save(article1);
    }

    @Test
    void containsSearchText_emptySearchText_returnsArticlesSortedByCitedByAndYear() {
        var page = articleRepository.containsSearchText(
                "",
                PageRequest.of(0, 4)
        );

        var result = page.getContent();

        assertEquals(4, result.size());
        assertEquals(article2.getTitle(), result.get(0).getTitle());
        assertEquals(article3.getTitle(), result.get(1).getTitle());
        assertEquals(article1.getTitle(), result.get(2).getTitle());
        assertEquals(article4.getTitle(), result.get(3).getTitle());

    }

    @Test
    void containsSearchText_nonEmptySearchText_returnsAllMatchingArticles() {
        var page = articleRepository.containsSearchText(
                "searchText",
                PageRequest.of(0, 4)
        );

        var result = page.getContent();

        assertEquals(3, result.size());
        assertEquals(article2.getTitle(), result.get(0).getTitle());
        assertEquals(article1.getTitle(), result.get(1).getTitle());
        assertEquals(article3.getTitle(), result.get(2).getTitle());
    }

    @Test
    void containsSearchText_nonEmptySearchText_ignoreCaseInMatching() {
        var page = articleRepository.containsSearchText(
                "SEARCHText",
                PageRequest.of(0, 4)
        );

        var result = page.getContent();

        assertEquals(3, result.size());
    }
}
