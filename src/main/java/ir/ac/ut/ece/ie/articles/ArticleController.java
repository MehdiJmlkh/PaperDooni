package ir.ac.ut.ece.ie.articles;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/articles")
public class ArticleController {
    private final ArticleService articleService;

    @GetMapping
    public List<ArticleSummaryDto> getArticles(
            @RequestParam(value = "searchText", required = false, defaultValue = "") String searchText) {
        return articleService.getArticles(searchText);
    }

    @GetMapping("/{id}")
    public ArticleDto getArticle(@PathVariable("id") Long id) {
        return articleService.getArticle(id);
    }

    @PostMapping
    public ResponseEntity<ArticleDto> addArticle(
            @RequestBody AddArticleRequest request,
            UriComponentsBuilder uriBuilder
    ) {
        var articleDto = articleService.addArticle(request);
        var uri = uriBuilder.path("/articles/{id}").buildAndExpand(articleDto.getId()).toUri();
        return ResponseEntity.created(uri).body(articleDto);
    }

    @ExceptionHandler(ArticleNotFoundException.class)
    public ResponseEntity<ErrorDto> handleArticleNotFoundException() {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(new ErrorDto("There is no article with this title."));
    }

    @ExceptionHandler(CitationNotFoundException.class)
    public ResponseEntity<ErrorDto> handleCitationNotFoundException() {
        return ResponseEntity.badRequest()
                .body(new ErrorDto("Citation ID(s) not found."));
    }

    @ExceptionHandler(TitleAlreadyExistsException.class)
    public ResponseEntity<ErrorDto> handleTitleAlreadyExistsException() {
        return ResponseEntity.badRequest()
                .body(new ErrorDto("An article with this title already exists."));
    }
}
