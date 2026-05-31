package ir.ac.ut.ece.ie.articles;

import lombok.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Article implements Comparable<Article> {
    private Long id;
    private String title;
    private String abs;
    private String body;
    private int year;
    private List<Article> citations = new ArrayList<>();
    private List<Article> citedBy = new ArrayList<>();

    public void addCitation(Article article) {
        citations.add(article);
        article.citedBy.add(this);
    }

    public boolean titleContains(String searchText) {
        return title.toLowerCase().contains(searchText.toLowerCase());
    }

    public boolean absContains(String searchText) {
        return abs.toLowerCase().contains(searchText.toLowerCase());
    }

    @Override
    public int compareTo(Article other) {
        if (citedBy.size() != other.citedBy.size()) {
            return citedBy.size() - other.citedBy.size();
        }
        return year - other.getYear();
    }
}
