package com.v2solve.app.security.securitymodel;

import java.util.Date;

import lombok.Data;

@Data
public class ChangeLog 
{
	String action;
	String changeTitle;
	String changedRecord;
	String changerId;
	Date datetime;
	String originalRecord;
	String recordIdentifier;
	String resource;
	String targetId;
}