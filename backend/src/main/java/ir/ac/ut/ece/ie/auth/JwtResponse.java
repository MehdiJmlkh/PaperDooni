package ir.ac.ut.ece.ie.auth;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class JwtResponse {
    private String token;
}
