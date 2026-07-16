package ir.ac.ut.ece.ie.users;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@AllArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @PostMapping("/sign-up")
    public ResponseEntity<Map<String, String>> signUp(@Valid @RequestBody SignUpRequest request) {
        if (request.getEmail().isEmpty() && request.getPhoneNumber().isEmpty()) {
            return ResponseEntity.badRequest()
                    .body(Map.of("error", "Email or phone number is required"));
        }

        userService.createUser(request);

        return ResponseEntity.ok().build();
    }
}
