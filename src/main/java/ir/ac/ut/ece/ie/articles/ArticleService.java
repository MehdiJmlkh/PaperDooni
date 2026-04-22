package ir.ac.ut.ece.ie.articles;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ArticleService {
    private final ArticleRepository articleRepository;
    private final ArticleMapper articleMapper;

    public List<ArticleSummaryDto> getAllArticles() {
            return articleRepository.getAll().stream()
                    .map(articleMapper::toSummaryDto)
                    .toList();
    }

    public ArticleDto getArticle(Long id) {
        var article = articleRepository.findById(id)
                .orElseThrow(ArticleNotFoundException::new);

        return articleMapper.toDto(article);
    }
}
