package ir.ac.ut.ece.ie.users;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {
    @PostMapping("/sign-up")
    public ResponseEntity<Map<String, String>> signUp(@Valid @RequestBody SignUpRequest request) {
        if (request.getEmail().isEmpty() && request.getPhoneNumber().isEmpty()) {
            return ResponseEntity.badRequest()
                    .body(Map.of("error", "Email or phone number is required"));
        }
        System.out.println(request);

        return ResponseEntity.ok().build();
    }
}
