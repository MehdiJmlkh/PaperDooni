package ir.ac.ut.ece.ie.users;

import ir.ac.ut.ece.ie.articles.ArticleMapper;
import ir.ac.ut.ece.ie.articles.ArticleRepository;
import ir.ac.ut.ece.ie.articles.ArticleSummaryDto;
import ir.ac.ut.ece.ie.auth.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final AuthService authService;
    private final ArticleMapper articleMapper;
    private final ArticleRepository articleRepository;

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
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        userRepository.save(user);
    }

    public List<ArticleSummaryDto> getUserArticles() {
        var articles = authService.me()
                .getArticles();

        return articles.stream()
                .map(article -> articleMapper.toSummaryDto(
                        article,
                        articleRepository.getCitedByCount(article.getId())
                    )
                )
                .toList();
    }

    public void changeEmail(ChangeEmailRequest request) {
        var user = authService.me();

        if (user.getEmail().equals(request.getNewEmail())) {
            throw new EmailSameAsCurrentException();
        }

        if (userRepository.existsByEmail(request.getNewEmail())) {
            throw new EmailAlreadyExistsException();
        }

        user.setEmail(request.getNewEmail());
        userRepository.save(user);
    }

    public void changePhoneNumber(ChangePhoneNumberRequest request) {
        var user = authService.me();

        if (user.getPhoneNumber().equals(request.getNewPhoneNumber())) {
            throw new PhoneNumberSameAsCurrentException();
        }

        if (userRepository.existsByPhoneNumber(request.getNewPhoneNumber())) {
            throw new PhoneNumberAlreadyExistsException();
        }

        user.setPhoneNumber(request.getNewPhoneNumber());
        userRepository.save(user);
    }

    public void changePassword(ChangePasswordRequest request) {
        var newPassword = request.getNewPassword();
        var user = authService.me();

        if(passwordEncoder.matches(newPassword, user.getPassword())) {
            throw new PasswordSameAsCurrentException();
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
    }

    public UserDto getCurrentUser() {
        var user = authService.me();
        return userMapper.toDto(user);
    }
}
