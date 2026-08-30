package ir.ac.ut.ece.ie.common;

import ir.ac.ut.ece.ie.articles.ErrorDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidation(
            MethodArgumentNotValidException exception
    ) {
        Map<String, String> errors = new HashMap<>();

        exception.getBindingResult().getFieldErrors().forEach(error ->
                errors.put(error.getField(), error.getDefaultMessage())
        );

        return ResponseEntity.badRequest().body(errors);
    }

    @ExceptionHandler(ProdProfileException.class)
    public ResponseEntity<ErrorDto> ProdProfileException() {
        return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body(new ErrorDto("This action is unavailable in demo mode. Run PaperDooni locally to enable it"));
    }
}
