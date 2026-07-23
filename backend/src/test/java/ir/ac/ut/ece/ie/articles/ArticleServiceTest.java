package ir.ac.ut.ece.ie.articles;

import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
public class ArticleServiceTest {
    @MockitoBean
    private ArticleRepository articleRepository;
    @Autowired
    private ArticleService articleService;

    @Test
    void addArticle_titleAlreadyExists_throwsException() {
        var request = new AddArticleRequest();
        request.setTitle("title");

        when(articleRepository.findByTitleIgnoreCase(any())).thenReturn(Optional.of(new Article()));

        assertThrows(TitleAlreadyExistsException.class, () -> articleService.addArticle(request));
    }

    @Test
    void addArticle_citationNotFound_throwsException() {
        var request = new AddArticleRequest();
        request.setTitle("title");
        request.setCitations(List.of(1L, 2L));

        when(articleRepository.findById(1L)).thenReturn(Optional.of(new Article()));
        when(articleRepository.findById(2L)).thenReturn(Optional.empty());

        assertThrows(CitationNotFoundException.class, () -> articleService.addArticle(request));
    }

    @Test
    void addArticle_validInput_returnsArticleDto() {
        var request = new AddArticleRequest();
        request.setTitle("title");
        request.setAbs("abstract");
        request.setBody("body");
        request.setYear(2026);
        request.setCitations(List.of(1L, 2L));

        var citation1 = new Article();
        citation1.setTitle("title 1");
        var citation2 = new Article();
        citation2.setTitle("title 2");

        when(articleRepository.findById(1L)).thenReturn(Optional.of(citation1));
        when(articleRepository.findById(2L)).thenReturn(Optional.of(citation2));

        var articleDto = articleService.addArticle(request);

        var captor = ArgumentCaptor.forClass(Article.class);
        verify(articleRepository).save(captor.capture());
        var article = captor.getValue();

        assertEquals(request.getTitle(), articleDto.getTitle());
        assertEquals(request.getAbs(), articleDto.getAbs());
        assertEquals(request.getYear(), articleDto.getYear());
        assertEquals(request.getBody(), articleDto.getBody());
        assertEquals(2, articleDto.getCitations().size());
        assertEquals(citation1.getTitle(), articleDto.getCitations().get(0).getTitle());
        assertEquals(citation2.getTitle(), articleDto.getCitations().get(1).getTitle());

        assertEquals(request.getTitle(), article.getTitle());
    }

    @Test
    void getArticle_articleNotFound_throwsException() {
        assertThrows(ArticleNotFoundException.class, () -> articleService.getArticle(1L));
    }

    @Test
    void getArticle_validInput_returnsArticleDto() {
        var article = Article.builder().id(1L).title("title").abs("abs").body("body")
                .year(2026).build();

        when(articleRepository.findById(1L)).thenReturn(Optional.of(article));

        CitationView citation1 = mock(CitationView.class);
        when(citation1.getId()).thenReturn(2L);
        when(citation1.getTitle()).thenReturn("Citation 1");

        CitationView citation2 = mock(CitationView.class);
        when(citation2.getId()).thenReturn(3L);
        when(citation2.getTitle()).thenReturn("Citation 2");

        when(articleRepository.findCitationsById(1L)).thenReturn(List.of(citation1, citation2));

        var articleDto = articleService.getArticle(1L);

        assertEquals(article.getId(), articleDto.getId());
        assertEquals(article.getTitle(), articleDto.getTitle());
        assertEquals(article.getAbs(), articleDto.getAbs());
        assertEquals(article.getBody(), articleDto.getBody());
        assertEquals(article.getYear(), articleDto.getYear());
        assertEquals(2, articleDto.getCitations().size());

        var citationDto1 = articleDto.getCitations().get(0);
        var citationDto2 = articleDto.getCitations().get(1);

        assertEquals(citation1.getId(), citationDto1.getId());
        assertEquals(citation1.getTitle(), citationDto1.getTitle());

        assertEquals(citation2.getId(), citationDto2.getId());
        assertEquals(citation2.getTitle(), citationDto2.getTitle());
    }
}
