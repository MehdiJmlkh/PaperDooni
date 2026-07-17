package ir.ac.ut.ece.ie.auth;

import ir.ac.ut.ece.ie.users.User;
import ir.ac.ut.ece.ie.users.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User login(LoginRequest request) {
        var user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(InvalidUsernameOrPasswordException::new);

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new InvalidUsernameOrPasswordException();
        }

        return user;
    }

    public User me() {
        var authentication = SecurityContextHolder.getContext()
                .getAuthentication();

        var userId = (Long) authentication.getPrincipal();

        return userRepository.findById(userId).orElseThrow();
    }
}
