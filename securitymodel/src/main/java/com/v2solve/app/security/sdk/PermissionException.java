package com.v2solve.app.security.sdk;


/**
 * A permission exception which can/should be thrown when there is no permission to perform the action in a context.
 * @author Saurin Magiawala
 *
 */
public class PermissionException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public PermissionException() {
		// 
	}

	public PermissionException(String message) {
		super(message);
		// 
	}

	public PermissionException(Throwable cause) {
		super(cause);
		// 
	}

	public PermissionException(String message, Throwable cause) {
		super(message, cause);
		// 
	}

	public PermissionException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// 
	}

}
