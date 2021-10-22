package ir.masoomi.mymealy.exception;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
@Log4j2
public class RestErrorHandlerAdvice {


    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<?> handleStorageFileNotFound(Exception ex) {

        log.error(ex.getMessage());

        return new ResponseEntity(new BusinessException("There is a problem!"), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
