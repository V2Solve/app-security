package com.v2solve.app.security.securitymodel.datalogic;

import java.util.HashMap;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.persistence.criteria.CriteriaBuilder.In;
import com.v2solve.app.security.model.entities.Application;
import com.v2solve.app.security.utility.JPAUtils;

/**
 * Utility functions for the data access layer.
 * @author Saurin Magiawala
 *
 */
public class DatalogicUtils 
{
	/**
	 * Identifiers for the property and the relationship.  This is common across the code, because consistently it has been named as such 
	 * in all tables.
	 */
	public static final String APP_IDENTIFIER_PROPERTY   = "appIdentifier";
	public static final String APP_RELATIONSHIP_PROPERTY = "application";

	/**
	 * Finds a Unique Object of the entity represented by the clzz, with a property identifier, having value idValue.
	 * It throws an exception if 0 instances found, or if multiple instances found. The instance found must exactly be 1.
	 * @param <T>
	 * @param em
	 * @param clzz
	 * @param identifier
	 * @param idValue
	 * @return
	 */
	public static <T> T findObject (EntityManager em,Class<T> clzz, String identifier,Object idValue) 
	{
		List<T> listOfObjs = JPAUtils.findObjects(em, clzz, identifier, idValue);
		if (listOfObjs == null || listOfObjs.isEmpty())
			throw new DataLogicValidationException("Object with identifier: " + idValue + " not found.");
		
		if (listOfObjs.size() > 1)
			throw new DataLogicValidationException("Multiple Objects with identifier: " + idValue + " found.");
		
		T obj = listOfObjs.get(0);
		
		return obj;
	}
	
	/**
	 * Finds a Unique Object of the entity represented by the clzz, with a property identifier, having value idValue.
	 * It returns null, if it does not find an object. 
	 * @param <T>
	 * @param em
	 * @param clzz
	 * @param identifier
	 * @param idValue
	 * @return
	 */
	public static <T> T findObjectReturnNull (EntityManager em,Class<T> clzz, String identifier,String idValue) 
	{
		List<T> listOfObjs = JPAUtils.findObjects(em, clzz, identifier, idValue);
		if (listOfObjs == null || listOfObjs.isEmpty())
			return null;
		if (listOfObjs.size() > 1)
			throw new DataLogicValidationException("Multiple Objects with identifier: " + idValue + " found.");

		T obj = listOfObjs.get(0);
		return obj;
	}

	
	
	/**
	 * Given the root of type T, this method adds a clause to limit the records for those owned by the apps, or if they are global.
	 * @param <T>
	 * @param cb
	 * @param limitingAppDomains - the results to be limited to these applications owned, or Global.
	 * @param root
	 * @param appProperty - the property which identifies the relationship of the T with the application.
	 * @param appIdentifierProperty - the identifying property contained in the limitingAppDomain strings - usually the appIdentifier.
	 * @param currentPredicate - the current predicate if any.. (if it exists already, then an 'AND' is done with that predicate).
	 * @return
	 */
	public static <T> Predicate addLimitingClauseForApps (CriteriaBuilder cb,List<String> limitingAppDomains,Root<T> root,String appProperty,String appIdentifierProperty,Predicate currentPredicate)
	{
		if (limitingAppDomains != null && !limitingAppDomains.isEmpty())
		{
			// We will have to join the table..
			Join<T,Application> forApps = root.join(appProperty,JoinType.LEFT);
			Path<?> appPropertyProp = root.get(appProperty);
			Path<String> appIdentifierProp = forApps.get(appIdentifierProperty);
			In<String> inClause = cb.in(appIdentifierProp);
			Predicate inApps = JPAUtils.buildInvalues(inClause, limitingAppDomains);
			Predicate globalObject = cb.isNull(appPropertyProp);
			
			Predicate finalPredicate = cb.or(inApps,globalObject);
			if (currentPredicate != null)
				finalPredicate = cb.and(currentPredicate,finalPredicate);
			else
				currentPredicate = finalPredicate;
		}
		
		return currentPredicate;
	}
	
	/**
	 * Creates in clause based on values found in the limitData if any and returns the predicate duly 'ANDED'
	 * @param <T> - The type of RootObject
	 * @param <K> - the type of limiting property list..
	 * @param cb - CriteriaBuilder.
	 * @param root - the Select Root. 
	 * @param limitData - if there is any criteria using which the records should be limited.
	 * @param currentPredicate - if there is already a current predicate.
	 * @return
	 */
	public static <T,K> Predicate addLimitingClauseForProperties (CriteriaBuilder cb,Root<T> root,HashMap<String, List<K>> limitData,Predicate currentPredicate)
	{
		Predicate finalPredicate = null;
		
		if (limitData != null && !limitData.isEmpty())
		{
			for (String property: limitData.keySet())
			{
				Path<K> propPath = root.get(property);
				List<K> values = limitData.get(property);
				if (values != null && !values.isEmpty())
				{
					In<K> inClause = cb.in(propPath);
					Predicate inObjs = JPAUtils.buildInvalues(inClause, values);
					if (finalPredicate == null)
						finalPredicate = inObjs;
					else
						finalPredicate = cb.and(finalPredicate,inObjs);
				}
			}
		}
			
		if (currentPredicate != null)
				finalPredicate = cb.and(currentPredicate,finalPredicate);
			else
				currentPredicate = finalPredicate;
		
		return currentPredicate;
	}

}
