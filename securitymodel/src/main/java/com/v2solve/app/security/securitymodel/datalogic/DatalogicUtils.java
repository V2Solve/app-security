package com.v2solve.app.security.securitymodel.datalogic;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

import javax.persistence.EntityManager;

import framework.JPAUtils;
import framework.ReflectUtils;


/**
 * Utility functions for the data access layer.
 * @author Saurin Magiawala
 *
 */
public class DatalogicUtils {

	/**
	 * Finds a Unique Object of the entity represented by the clzz, with a property identifier, having value idValue.
	 * It throws an exception if 0 instances found, or if multiple instances found. The instance found must exactly be 1.
	 * @param <T>
	 * @param em
	 * @param clzz
	 * @param identifier
	 * @param idValue
	 * @return
	 * @throws InstantiationException
	 * @throws IllegalAccessException
	 * @throws IllegalArgumentException
	 * @throws InvocationTargetException
	 */
	public static <T> T findObject (EntityManager em,Class<T> clzz, String identifier,String idValue) 
	throws InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException
	{
		T searchObj = clzz.newInstance();
		// Lets set the value on the bean..
		String methodName = "set" + identifier.substring(0, 1).toUpperCase() + identifier.substring(1);
		ReflectUtils.setProperty(searchObj, methodName, idValue, String.class.getName());
		List<T> listOfObjs = JPAUtils.getObjects(em, clzz, searchObj, false, false);
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
	 * @param expand : if true, will expand into child as well.
	 * @return
	 * @throws InstantiationException
	 * @throws IllegalAccessException
	 * @throws IllegalArgumentException
	 * @throws InvocationTargetException
	 */
	public static <T> T findObjectReturnNull (EntityManager em,Class<T> clzz, String identifier,String idValue,boolean expand) 
	throws InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException
	{
		T searchObj = clzz.newInstance();
		// Lets set the value on the bean..
		String methodName = "set" + identifier.substring(0, 1).toUpperCase() + identifier.substring(1);
		ReflectUtils.setProperty(searchObj, methodName, idValue, String.class.getName());
		List<T> listOfObjs = JPAUtils.getObjects(em, clzz, searchObj, false, expand);
		if (listOfObjs == null || listOfObjs.isEmpty())
			return null;
		if (listOfObjs.size() > 1)
			throw new DataLogicValidationException("Multiple Objects with identifier: " + idValue + " found.");

		T obj = listOfObjs.get(0);
		return obj;
	}
	

	/**
	 * Finds all objects of the entity represented by the clzz, with a property identifier, having value idValue
	 * @param <T>
	 * @param em
	 * @param clzz
	 * @param identifier
	 * @param idValue
	 * @return
	 * @throws InstantiationException
	 * @throws IllegalAccessException
	 * @throws IllegalArgumentException
	 * @throws InvocationTargetException
	 */
	public static <T> List<T> findObjects (EntityManager em,Class<T> clzz, String identifier,String idValue) 
	throws InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException
	{
		T searchObj = clzz.newInstance();
		// Lets set the value on the bean..
		String methodName = "set" + identifier.substring(0, 1).toUpperCase() + identifier.substring(1);
		ReflectUtils.setProperty(searchObj, methodName, idValue, String.class.getName());
		List<T> listOfObjs = JPAUtils.getObjects(em, clzz, searchObj, false, false);
		return listOfObjs;
	}

	
	public static <T> List<T> findObjects (EntityManager em,Class<T> clzz,T searchObj, String identifier,String idValue) 
	throws InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException
	{
		// Lets set the value on the bean..
		List<T> listOfObjs = JPAUtils.getObjects(em, clzz, searchObj, false, false);
		return listOfObjs;
	}

	
	/**
	 * Creates a in Clause query string..
	 * @param limitingDomains
	 * @return
	 */
	public static String createInClause (List<String> limitingDomains)
	{
		String inClause = null;
		if (limitingDomains != null && limitingDomains.isEmpty()==false)
		{
			StringBuilder sb = new StringBuilder();
			sb.append("(");
			for (String domainName: limitingDomains)
				if (sb.length() > 0)
					sb.append(",");
				else
					sb.append("'"+domainName+"'");
			
			sb.append(")");
			inClause = sb.toString();
		}

		return inClause;
	}
}
