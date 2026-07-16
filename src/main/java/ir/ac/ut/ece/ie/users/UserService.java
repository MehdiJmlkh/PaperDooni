package ir.ac.ut.ece.ie.users;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public void createUser(SignUpRequest request) {
        var user = userMapper.toEntity(request);

        if (userRepository.existsByUsername(request.getUsername())) {
            throw new UsernameAlreadyExistsException();
        }

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new EmailAlreadyExistsException();
        }

        if (userRepository.existsByPhoneNumber(request.getPhoneNumber())) {
            throw new PhoneNumberAlreadyExistsException();
        }

        userRepository.save(user);
    }
}
