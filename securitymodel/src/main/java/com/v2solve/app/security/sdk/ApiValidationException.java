package com.v2solve.app.security.sdk;


/**
 * A permission exception which can/should be thrown when there is no permission to perform the action in a context.
 * @author Saurin Magiawala
 *
 */
public class ApiValidationException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ApiValidationException() {
		// 
	}

	public ApiValidationException(String message) {
		super(message);
		// 
	}

	public ApiValidationException(Throwable cause) {
		super(cause);
		// 
	}

	public ApiValidationException(String message, Throwable cause) {
		super(message, cause);
		// 
	}

	public ApiValidationException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// 
	}

}
