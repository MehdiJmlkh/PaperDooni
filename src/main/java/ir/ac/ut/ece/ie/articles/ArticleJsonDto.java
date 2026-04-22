package ir.ac.ut.ece.ie.articles;

import lombok.Data;

import java.util.List;

@Data
public class ArticleJsonDto {
    private String title;
    private String abs;
    private String body;
    private int year;
    private List<Long> citations;
}
