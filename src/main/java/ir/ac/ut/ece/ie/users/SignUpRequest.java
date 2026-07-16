package ir.ac.ut.ece.ie.users;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SignUpRequest {
    @NotBlank
    private String username;

    @Size(min = 6, message = "Password must be at least 6 characters")
    @Pattern(
            regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).+$",
            message = "Password must include uppercase, lowercase, and a number"
    )
    private String password;

    @Email(message = "Email must be valid")
    private String email;

    @Pattern(
            regexp = "^$|^0\\d{10}$",
            message = "Phone number must be valid"
    )
    private String phoneNumber;
}
