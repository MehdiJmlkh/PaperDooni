package ir.ac.ut.ece.ie.articles;

import lombok.Data;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@Data
public class CitationDto {
    private Long id;
    private URI location;
    private String title;

    public void setLocation(UriComponentsBuilder uriBuilder, String path) {
        location = uriBuilder.path(path).buildAndExpand(id).toUri();
    }
}
