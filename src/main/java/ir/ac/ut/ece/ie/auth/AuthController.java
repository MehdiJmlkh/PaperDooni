package ir.ac.ut.ece.ie.auth;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@AllArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;
    private final JwtService jwtService;

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest request) {
        var user = authService.login(request);
        var accessToken = jwtService.generateAccessToken(user);
        return ResponseEntity.ok().body(new JwtResponse(accessToken));
    }

    @ExceptionHandler(InvalidUsernameOrPasswordException.class)
    public ResponseEntity<Map<String, String>> handleInvalidUsernameOrPasswordException() {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(Map.of("error", "Invalid username or password"));
    }
}
