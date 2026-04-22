package ir.ac.ut.ece.ie.articles;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

@Repository
public class ArticleRepository {
    private final List<Article> articles = new ArrayList<>();
    private Long lastGeneratedId = 0L;


    public ArticleRepository() {
        try {
            ObjectMapper mapper = new ObjectMapper();

            mapper.readValue(
                    new File("./src/main/resources/sampleArticles.json"),
                    new TypeReference<List<Article>>() {}
            ).forEach(this::addArticle);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

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
}
