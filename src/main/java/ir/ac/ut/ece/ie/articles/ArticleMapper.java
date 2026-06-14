package ir.ac.ut.ece.ie.articles;

import org.springframework.stereotype.Component;

@Component
public class ArticleMapper {
    public ArticleSummaryDto toSummaryDto(Article article, Integer citedBy) {
        var articleDto = new ArticleSummaryDto();

        articleDto.setId(article.getId());
        articleDto.setTitle(article.getTitle());
        articleDto.setAbs(article.getAbs());
        articleDto.setYear(article.getYear());
        articleDto.setCitedBy(citedBy);

        return articleDto;
    }

    public ArticleDto toDto(Article article) {
        var articleDto = new ArticleDto();
        articleDto.setId(article.getId());
        articleDto.setTitle(article.getTitle());
        articleDto.setBody(article.getBody());
        articleDto.setYear(article.getYear());
        articleDto.setAbs(article.getAbs());
        return articleDto;
    }

    public Article toEntity(AddArticleRequest request) {
        var article = new Article();
        article.setTitle(request.getTitle());
        article.setAbs(request.getAbs());
        article.setBody(request.getBody());
        article.setYear(request.getYear());

        return  article;
    }

    public CitationDto toCitationDto(Article article) {
        var citationDto = new CitationDto();

        citationDto.setId(article.getId());
        citationDto.setTitle(article.getTitle());

        return citationDto;
    }

    public CitationDto toCitationDto(CitationView article) {
        var citationDto = new CitationDto();

        citationDto.setId(article.getId());
        citationDto.setTitle(article.getTitle());

        return citationDto;
    }
}
