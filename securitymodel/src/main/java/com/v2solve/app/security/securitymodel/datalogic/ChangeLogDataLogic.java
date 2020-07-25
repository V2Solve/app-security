package com.v2solve.app.security.securitymodel.datalogic;

import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.v2solve.app.security.model.entities.ChangeLog;
import com.v2solve.app.security.sdk.PagingInformation;
import com.v2solve.app.security.sdk.application.SearchChangeLogRequest;
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

	
	/**
	 * Searches the Change Log and returns results..
	 * @param em
	 * @param request
	 * @param limitData
	 * @return
	 */
	public static List<ChangeLog> searchChangeLog (EntityManager em,SearchChangeLogRequest request,HashMap<String, List<String>> limitData)
	{
		CriteriaBuilder cb = em.getCriteriaBuilder();
		CriteriaQuery<ChangeLog> cq = cb.createQuery(ChangeLog.class);
		Root<ChangeLog> root = cq.from(ChangeLog.class);
		
		Predicate finalPredicate = null;
		
		String str = request.getAction();
		if (!StringUtils.isNullOrZeroLength(str))
		{
			Path<String> propPath = root.get("action");
			Predicate predicate = cb.like(propPath, "%"+str+"%");
			finalPredicate = predicate;
		}
		
		str = request.getResource ();
		if (!StringUtils.isNullOrZeroLength(str))
		{
			Path<String> propPath = root.get("resource");
			Predicate predicate = cb.like(propPath, "%"+str+"%");
			if (finalPredicate == null)
				finalPredicate = predicate;
			else
				finalPredicate = cb.and(finalPredicate,predicate);
		}
	
		str = request.getChangerId();
		if (!StringUtils.isNullOrZeroLength(str))
		{
			Path<String> propPath = root.get("changerId");
			Predicate predicate = cb.like(propPath, "%"+str+"%");
			if (finalPredicate == null)
				finalPredicate = predicate;
			else
				finalPredicate = cb.and(finalPredicate,predicate);
		}
		
		str = request.getRecordIdentifier();
		if (!StringUtils.isNullOrZeroLength(str))
		{
			Path<String> propPath = root.get("recordIdentifier");
			Predicate predicate = cb.like(propPath, "%"+str+"%");
			if (finalPredicate == null)
				finalPredicate = predicate;
			else
				finalPredicate = cb.and(finalPredicate,predicate);
		}

		str = request.getChangeTitle();
		if (!StringUtils.isNullOrZeroLength(str))
		{
			Path<String> propPath = root.get("changeTitle");
			Predicate predicate = cb.like(propPath, "%"+str+"%");
			if (finalPredicate == null)
				finalPredicate = predicate;
			else
				finalPredicate = cb.and(finalPredicate,predicate);
		}
		
		Timestamp to   = request.getToDate();
		Timestamp from = request.getFromDate();
		
		if (to != null || from != null)
		{
			Path<Date> dateTimePath = root.get("datetime");
			
			if (to != null)
			{
				Predicate predicate = cb.lessThanOrEqualTo(dateTimePath, to);
				if (finalPredicate == null)
					finalPredicate = predicate;
				else
					finalPredicate = cb.and(finalPredicate,predicate);
			}
			
			if (from != null)
			{
				Predicate predicate = cb.greaterThanOrEqualTo(dateTimePath, from);
				if (finalPredicate == null)
					finalPredicate = predicate;
				else
					finalPredicate = cb.and(finalPredicate,predicate);
			}
		}
		
		// Finally lets put any limiting data clause..
		finalPredicate = DatalogicUtils.addLimitingClauseForProperties(cb, root, limitData, finalPredicate);
		
		if (finalPredicate != null)
			cq.where(finalPredicate);
		
		// Lets see if any paging requirements..
		TypedQuery<ChangeLog> q = em.createQuery(cq);
		
		PagingInformation pagingInfo = request.getPagingInfo();
		
		if (pagingInfo != null)
		{
			int currentPage = pagingInfo.getCurrentPage();
			int pageSize = pagingInfo.getPageSize();
			if (currentPage > 0 && pageSize > 0)
			{
				q.setFirstResult((currentPage-1)*pageSize);
				q.setMaxResults(pageSize);
			}
		}
		
		return q.getResultList();
		
	}
	
}