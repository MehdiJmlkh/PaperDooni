package ir.ac.ut.ece.ie.articles;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/articles")
public class ArticleController {
    private final ArticleService articleService;

    @GetMapping
    public List<ArticleSummaryDto> getAllArticles() {
        return articleService.getAllArticles();
    }

    @GetMapping("/{id}")
    public ArticleDto getArticle(@PathVariable("id") Long id) {
        return articleService.getArticle(id);
    }

    @ExceptionHandler(ArticleNotFoundException.class)
    public ResponseEntity<ErrorDto> handleArticleNotFoundException() {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(new ErrorDto("There is no article with this title."));
    }
}
