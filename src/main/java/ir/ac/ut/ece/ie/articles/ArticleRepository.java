package ir.ac.ut.ece.ie.articles;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ArticleRepository extends JpaRepository<Article, Long> {
    Optional<Article> findByTitleIgnoreCase(String title);

    default Page<Article> containsSearchText(String searchText, Integer page, Integer size) {
        var articles = findAll();
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
         return new Page<>(filteredArticles.subList(fromIndex, toIndex), filteredArticles.size());
    }
}
