package com.v2solve.app.security.securitymodel.datalogic;

import java.util.Date;

import javax.persistence.EntityManager;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.v2solve.app.security.model.entities.ChangeLog;
import com.v2solve.app.security.utility.JPAUtils;
import com.v2solve.app.security.utility.StringUtils;


/**
 * This class contains helper methods to capture change log within the system.
 * @author Saurin Magiawala
 *
 */
public class ChangeLogDataLogic 
{
//	private Integer id;
//	private String action;
//	private String resource;
//	private String changeTitle;
//	private String recordIdentifier;
//	private Date datetime;	
//	private String changerId;
//	private String targetId;	
//	private String changedRecord;
//	private String originalRecord;
	
	public static ChangeLog createChangeLog (EntityManager em,
											 String action,
			                                 String resource,
			                                 String changeTitle,
			                                 String recordIdentifier,
			                                 Date dateTime,
			                                 String changerId,
			                                 String targetId,
			                                 Object changedRecord,
			                                 Object originalRecord) throws JsonProcessingException
	{
		ChangeLog cl = new ChangeLog();
		
		cl.setAction(action);
		cl.setResource(resource);
		if (StringUtils.isNullOrZeroLength(changeTitle))
			changeTitle = action + " ON " + resource;
		cl.setChangeTitle(changeTitle);
		cl.setRecordIdentifier(recordIdentifier);
		if (dateTime == null)
			dateTime = new Date();
		cl.setDatetime(dateTime);
		cl.setChangerId(changerId);
		cl.setTargetId(targetId);
		
		ObjectMapper om = new ObjectMapper();
		
		if (changedRecord != null)
		{
			String jsonCR = "";
			if (!(changedRecord instanceof String))
				jsonCR = om.writeValueAsString(changedRecord);
			else
				jsonCR = (String) changedRecord;
			
			jsonCR = StringUtils.truncateTo(jsonCR, 2048, "...");
			cl.setChangedRecord(jsonCR);
		}
		
		if (originalRecord != null)
		{
			String jsonCR = "";
			if (!(originalRecord instanceof String))
					jsonCR = om.writeValueAsString(originalRecord);
			else
				jsonCR = (String) changedRecord;
			
			jsonCR = StringUtils.truncateTo(jsonCR, 2048, "...");
			cl.setOriginalRecord(jsonCR);
		}

		JPAUtils.createObject(em, cl);
		return cl;
	}
	
}