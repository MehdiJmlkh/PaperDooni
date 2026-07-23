package ir.ac.ut.ece.ie.articles;

import lombok.Data;

@Data
public class ArticleSummaryDto {
    private Long id;
    private String title;
    private String abs;
    private int year;
    private int citedBy;
}
