package ir.ac.ut.ece.ie.articles;

import lombok.Data;

@Data
public class ArticleDto {
    private String title;
    private String abs;
    private int year;
    private int citedBy;
}
