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

    @PostMapping
    public ResponseEntity<Map<String, String>> signUp(@Valid @RequestBody SignUpRequest request) {
        userService.createUser(request);

        return ResponseEntity.ok().build();
    }

    @ExceptionHandler(EmailOrPhoneNumberRequired.class)
    public ResponseEntity<Map<String, String>> handleEmailOrPhoneNumberRequired() {
        return ResponseEntity.badRequest()
                .body(Map.of("error", "Email or phone number is required"));
    }

    @ExceptionHandler(UsernameAlreadyExistsException.class)
    public ResponseEntity<Map<String, String>> handleUsernameAlreadyExistsException() {
        return ResponseEntity.badRequest()
                .body(Map.of("username", "Username already exits"));
    }

    @ExceptionHandler(EmailAlreadyExistsException.class)
    public ResponseEntity<Map<String, String>> handleEmailAlreadyExistsException() {
        return ResponseEntity.badRequest()
                .body(Map.of("email", "Email already exists"));
    }

    @ExceptionHandler(PhoneNumberAlreadyExistsException.class)
    public ResponseEntity<Map<String, String>> handlePhoneNumberAlreadyExistsException() {
        return ResponseEntity.badRequest()
                .body(Map.of("phoneNumber", "Phone number already exists"));
    }
}
