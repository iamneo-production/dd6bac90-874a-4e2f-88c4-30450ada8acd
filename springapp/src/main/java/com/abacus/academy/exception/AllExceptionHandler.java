package com.abacus.academy.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class AllExceptionHandler {
	@ExceptionHandler({
		DuplicateRecord.class,
		NoExistence.class,
		Exception.class
		})
	public Map<String, String> handleAddressNotFoundException(Exception ex) {
	    Map<String, String> errors = new HashMap<>();
	    errors.put("Error", ex.toString());
	    errors.put("Message", ex.getMessage());
	    return errors;
	}

}
