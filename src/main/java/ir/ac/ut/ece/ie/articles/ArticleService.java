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

    public ArticleDto addArticle(AddArticleRequest request) {
        var article = articleMapper.toEntity(request);
        var citations = request.getCitations().stream()
                .map(articleRepository::findById)
                .map(a -> a.orElseThrow(CitationNotFoundException::new))
                .toList();

        citations.forEach(citation -> citation.getCitedBy().add(article));
        article.setCitations(citations);
        articleRepository.addArticle(article);

        return articleMapper.toDto(article);
    }
}
