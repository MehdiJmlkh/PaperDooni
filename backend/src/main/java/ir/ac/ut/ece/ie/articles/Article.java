package ir.ac.ut.ece.ie.articles;

import ir.ac.ut.ece.ie.users.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "articles")
public class Article implements Comparable<Article>{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "abstract")
    private String abs;

    @Column(name = "body")
    private String body;

    @Column(name = "publication_year")
    private int year;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private User author;

    @ManyToMany
    @JoinTable(
            name = "article_citations",
            joinColumns = @JoinColumn(name = "citing_article_id"),
            inverseJoinColumns = @JoinColumn(name = "cited_article_id")
    )
    private List<Article> citations = new ArrayList<>();

    @ManyToMany(mappedBy = "citations")
    private List<Article> citedBy = new ArrayList<>();

    public void addCitation(Article article) {
        citations.add(article);
        article.citedBy.add(this);
    }

    @Override
    public int compareTo(Article other) {
        if (citedBy.size() != other.citedBy.size()) {
            return citedBy.size() - other.citedBy.size();
        }
        return year - other.getYear();
    }
}
