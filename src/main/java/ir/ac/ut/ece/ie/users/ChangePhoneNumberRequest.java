package ir.ac.ut.ece.ie.users;

import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class ChangePhoneNumberRequest {
    @Pattern(
            regexp = "^$|^0\\d{10}$",
            message = "Phone number must be valid"
    )
    private String newPhoneNumber;
}
