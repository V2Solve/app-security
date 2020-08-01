package com.v2solve.app.security.sdk.application;

import java.sql.Timestamp;
import com.v2solve.app.security.sdk.BaseRequest;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class SearchChangeLogRequest extends BaseRequest 
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * Provide search fields as required.
	 */
	String action;
	String resource;
	String changeTitle;
	String changerId;
	Timestamp fromDate;
	Timestamp toDate;
	String recordIdentifier;
}
