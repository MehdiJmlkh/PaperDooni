package ir.ac.ut.ece.ie.articles;

import org.springframework.stereotype.Component;

@Component
public class ArticleMapper {
    public ArticleSummaryDto toDto(Article article) {
        var articleDto = new ArticleSummaryDto();

        articleDto.setId(article.getId());
        articleDto.setTitle(article.getTitle());
        articleDto.setAbs(article.getAbs());
        articleDto.setYear(article.getYear());
        articleDto.setCitedBy(article.getCitations().size());

        return articleDto;
    }
}
