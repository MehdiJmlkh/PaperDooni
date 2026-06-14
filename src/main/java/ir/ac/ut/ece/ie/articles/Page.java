package ir.ac.ut.ece.ie.articles;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class Page<T> {
    List<T> content;
    long total;
}
