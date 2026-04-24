package ir.ac.ut.ece.ie.articles;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class Article {
    private Long id;
    private String title;
    private String abs;
    private String body;
    private int year;
    private List<Article> citations = new ArrayList<>();
    private List<Article> citedBy = new ArrayList<>();
}
