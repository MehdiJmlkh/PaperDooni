package ir.ac.ut.ece.ie.articles;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class ArticleService {
    private final ArticleRepository articleRepository;
    private final ArticleMapper articleMapper;

    public Page<ArticleSummaryDto> getArticles(String searchText, Integer page, Integer size) {
        var articlePage = articleRepository.containsSearchText(searchText, page, size);
        var articles = articlePage.content.stream()
                .map(articleMapper::toSummaryDto)
                .toList();

        return new Page<>(articles, articlePage.getTotal());
    }

    public ArticleDto getArticle(Long id) {
        var article = articleRepository.findById(id)
                .orElseThrow(ArticleNotFoundException::new);

        return articleMapper.toDto(article);
    }

    public ArticleDto addArticle(AddArticleRequest request) {
        articleRepository.findByTitleIgnoreCase(request.getTitle())
                .ifPresent(a -> { throw new TitleAlreadyExistsException(); });

        var article = articleMapper.toEntity(request);

        request.getCitations().stream()
                .map(id -> articleRepository.findById(id)
                                .orElseThrow(CitationNotFoundException::new))
                .forEach(article::addCitation);

        articleRepository.save(article);

        return articleMapper.toDto(article);
    }
}
