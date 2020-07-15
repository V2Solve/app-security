package com.v2solve.app.security.securitymodel.datalogic;


/**
 * An exception which could be thrown because of a data access layer validation issue.
 * @author Saurin Magiawala
 *
 */
public class DataLogicValidationException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public DataLogicValidationException() {
	}

	public DataLogicValidationException(String message) {
		super(message);
	}

	public DataLogicValidationException(Throwable cause) {
		super(cause);
	}

	public DataLogicValidationException(String message, Throwable cause) {
		super(message, cause);
	}

	public DataLogicValidationException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
