package ir.ac.ut.ece.ie.users;

import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ChangePasswordRequest {
    @Size(min = 6, message = "Password must be at least 6 characters")
    @Pattern(
            regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).+$",
            message = "Password must include uppercase, lowercase, and a number"
    )
    private String newPassword;
}
