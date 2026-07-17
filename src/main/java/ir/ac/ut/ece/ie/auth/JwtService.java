package ir.ac.ut.ece.ie.auth;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import ir.ac.ut.ece.ie.config.JwtConfig;
import ir.ac.ut.ece.ie.users.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@AllArgsConstructor
@Service
public class JwtService {
    private final JwtConfig jwtConfig;

    public String generateAccessToken(User user) {
        return generateToken(user, jwtConfig.getAccessTokenExpiration());
    }

    public Long getSubjectFromToken(String token) {
        var claims = getClaims(token);
        return Long.valueOf(claims.getSubject());
    }

    public boolean tokenIsExpired(String token) {
        try {
            var claims = getClaims(token);
            return claims.getExpiration().before(new Date());
        } catch (JwtException e) {
            return false;
        }
    }

    private Claims getClaims(String token) {
        return Jwts.parser()
                .verifyWith(jwtConfig.getSecretKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public String generateRefreshToken(User user) {
        return generateToken(user, jwtConfig.getRefreshTokenExpiration());
    }

    private String generateToken(User user, int tokenExpiration) {
        var claims = Jwts.claims()
                .subject(user.getId().toString())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 1000L * tokenExpiration))
                .build();

        return Jwts.builder()
                .claims(claims)
                .signWith(jwtConfig.getSecretKey())
                .compact();
    }
}
