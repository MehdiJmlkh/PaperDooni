package ir.ac.ut.ece.ie.articles;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ArticleRepository extends JpaRepository<Article, Long> {
    Optional<Article> findByTitleIgnoreCase(String title);

    @Query("select c.id, c.title from Article a join a.citations c where a.id = :id")
    List<CitationView> findCitationsById(Long id);

    @Query("select size(a.citedBy) from Article a where a.id = :id")
    Integer getCitedByCount(@Param("id") Long id);

    @Query("""
        select a
        from Article a
        where lower(a.title) like lower(concat('%', :searchText, '%'))
            or lower(a.abs) like lower(concat('%', :searchText, '%'))
        order by
            case
                when lower(a.title) like lower(concat('%', :searchText, '%'))
                then 0
                else 1
            end,
            size(a.citedBy) desc,
            a.year desc
    """)
    Page<Article> containsSearchText(String searchText, Pageable pageable);
}
