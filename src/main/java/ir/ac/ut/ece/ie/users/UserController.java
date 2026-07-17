package ir.ac.ut.ece.ie.users;

import ir.ac.ut.ece.ie.articles.ArticleSummaryDto;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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

    @GetMapping("/me/articles")
    public List<ArticleSummaryDto> getUserArticles() {
        return userService.getUserArticles();
    }

    @PostMapping("/me/email")
    public ResponseEntity<Void> changeEmail(@Valid @RequestBody ChangeEmailRequest request) {
        userService.changeEmail(request);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/me/phone-number")
    public ResponseEntity<Void> changePhoneNumber(@RequestBody ChangePhoneNumberRequest request) {
        userService.changePhoneNumber(request);
        return ResponseEntity.noContent().build();
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

    @ExceptionHandler(EmailSameAsCurrentException.class)
    public ResponseEntity<Map<String, String>> handleEmailSameAsCurrentException() {
        return ResponseEntity.badRequest()
                .body(Map.of("error", "New email must be different from current email"));
    }

    @ExceptionHandler(PhoneNumberSameAsCurrentException.class)
    public ResponseEntity<Map<String, String>> handlePhoneNumberSameAsCurrentException() {
        return ResponseEntity.badRequest()
                .body(Map.of("error", "New phone number must be different from current phone number"));
    }
}
