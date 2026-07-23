CREATE TABLE articles (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    abstract TEXT NOT NULL,
    body LONGTEXT NOT NULL,
    publication_year INT NOT NULL
);

CREATE TABLE article_citations (
    citing_article_id BIGINT NOT NULL,
    cited_article_id BIGINT NOT NULL,
    PRIMARY KEY (citing_article_id, cited_article_id),
    CONSTRAINT fk_article_citations_citing
        FOREIGN KEY (citing_article_id)
        REFERENCES articles(id),
    CONSTRAINT fk_article_citations_cited
        FOREIGN KEY (cited_article_id)
        REFERENCES articles(id)
);
