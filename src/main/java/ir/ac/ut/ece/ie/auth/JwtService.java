package ir.ac.ut.ece.ie.auth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import ir.ac.ut.ece.ie.users.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JwtService {
    @Value("${spring.jwt.secret}")
    private String secret;

    public String generateAccessToken(User user) {
        var tokenExpiration = 86400;
        var claims = Jwts.claims()
                .subject(user.getId().toString())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 1000 * tokenExpiration))
                .build();

        return Jwts.builder()
                .claims(claims)
                .signWith(Keys.hmacShaKeyFor(secret.getBytes()))
                .compact();
    }

}
