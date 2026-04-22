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

        return articleDto;
    }
}
