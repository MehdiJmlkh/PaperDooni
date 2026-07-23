package ir.ac.ut.ece.ie.users;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ChangeEmailRequest {
    @Email
    @NotBlank
    private String newEmail;
}
