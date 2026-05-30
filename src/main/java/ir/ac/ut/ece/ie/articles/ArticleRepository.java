package ir.ac.ut.ece.ie.articles;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class ArticleRepository {
    private final List<Article> articles = new ArrayList<>();
    private Long lastGeneratedId = 0L;

    public void addArticle(Article article) {
        article.setId(++lastGeneratedId);
        articles.add(article);
    }

    public List<Article> getAll() {
        return articles;
    }

    public Optional<Article> findById(Long id) {
        return articles.stream()
                .filter(article -> article.getId().equals(id))
                .findFirst();
    }

    public Optional<Article> findByTitle(String title) {
        return articles.stream()
                .filter(article -> article.getTitle().equals(title))
                .findFirst();
    }

    public List<Article> containsSearchText(String searchText, Integer page, Integer size) {
        var filteredArticles = articles
                .stream()
                .filter(article ->
                        article.titleContains(searchText) || article.absContains(searchText))
                .sorted((a, b) -> {
                    boolean aTitleContainsSearchText = a.titleContains(searchText);
                    boolean bTitleContainsSearchText = b.titleContains(searchText);

                    if (aTitleContainsSearchText && !bTitleContainsSearchText) {
                        return -1;
                    }
                    else if (!aTitleContainsSearchText && bTitleContainsSearchText) {
                        return 1;
                    }
                    return b.compareTo(a);
                })
                .toList();

        var fromIndex = Math.max((page - 1) * size, 0);
        var toIndex = Math.min(page * size, filteredArticles.size());
        return filteredArticles.subList(fromIndex, toIndex);
    }
}
