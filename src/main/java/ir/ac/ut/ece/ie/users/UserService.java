package ir.ac.ut.ece.ie.users;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public void createUser(SignUpRequest request) {
        if (request.getEmail().isEmpty() && request.getPhoneNumber().isEmpty()) {
            throw new EmailOrPhoneNumberRequired();
        }

        if (userRepository.existsByUsername(request.getUsername())) {
            throw new UsernameAlreadyExistsException();
        }

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new EmailAlreadyExistsException();
        }

        if (userRepository.existsByPhoneNumber(request.getPhoneNumber())) {
            throw new PhoneNumberAlreadyExistsException();
        }

        var user = userMapper.toEntity(request);

        userRepository.save(user);
    }
}
