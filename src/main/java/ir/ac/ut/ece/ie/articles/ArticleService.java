package ir.ac.ut.ece.ie.articles;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class ArticleService {
    private final ArticleRepository articleRepository;
    private final ArticleMapper articleMapper;

    public Page<ArticleSummaryDto> getArticles(String searchText, Integer pageNumber, Integer size) {
        var page = articleRepository.containsSearchText(searchText, PageRequest.of(pageNumber - 1, size));
        var articles = page.getContent().stream()
                .map(article -> articleMapper.toSummaryDto(
                        article,
                        articleRepository.getCitedByCount(article.getId())
                    )
                )
                .toList();

        return new Page<>(articles, page.getTotalElements());
    }

    public ArticleDto getArticle(Long id) {
        var article = articleRepository.findById(id)
                .orElseThrow(ArticleNotFoundException::new);
        var citations = articleRepository.findCitationsById(id);

        var articleDto = articleMapper.toDto(article);

        var citationDtoList = citations.stream()
                .map(articleMapper::toCitationDto)
                .toList();
        articleDto.setCitations(citationDtoList);

        return articleDto;
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

        var articleDto = articleMapper.toDto(article);
        var citationDtoList = article.getCitations().stream()
                .map(articleMapper::toCitationDto)
                .toList();
        articleDto.setCitations(citationDtoList);

        return articleDto;
    }
}
