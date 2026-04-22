package ir.ac.ut.ece.ie.articles;

import org.springframework.stereotype.Component;

@Component
public class ArticleMapper {
    public ArticleSummaryDto toSummaryDto(Article article) {
        var articleDto = new ArticleSummaryDto();

        articleDto.setId(article.getId());
        articleDto.setTitle(article.getTitle());
        articleDto.setAbs(article.getAbs());
        articleDto.setYear(article.getYear());
        articleDto.setCitedBy(article.getCitations().size());

        return articleDto;
    }

    public ArticleDto toDto(Article article) {
        var articleDto = new ArticleDto();
        articleDto.setId(article.getId());
        articleDto.setTitle(article.getTitle());
        articleDto.setBody(article.getBody());
        articleDto.setYear(article.getYear());
        articleDto.setAbs(article.getAbs());
        var citations = article.getCitations().stream()
                .map(this::toCitationDto)
                .toList();
        articleDto.setCitations(citations);
        return articleDto;
    }

    public Article toEntity(ArticleJsonDto articleJsonDto) {
        var article = new Article();
        article.setTitle(articleJsonDto.getTitle());
        article.setAbs(articleJsonDto.getAbs());
        article.setBody(articleJsonDto.getBody());
        article.setYear(articleJsonDto.getYear());

        return  article;
    }

    public CitationDto toCitationDto(Article article) {
        var citationDto = new CitationDto();

        citationDto.setId(article.getId());
        citationDto.setTitle(article.getTitle());

        return citationDto;
    }
}
