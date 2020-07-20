package com.v2solve.app.security.securitymodel.datalogic;

import java.lang.reflect.InvocationTargetException;
import java.util.List;
import javax.persistence.EntityManager;

import com.v2solve.app.security.utility.JPAUtils;

/**
 * Utility functions for the data access layer.
 * @author Saurin Magiawala
 *
 */
public class DatalogicUtils 
{

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
	public static <T> T findObject (EntityManager em,Class<T> clzz, String identifier,Object idValue) 
	throws InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException
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
	 * @throws InstantiationException
	 * @throws IllegalAccessException
	 * @throws IllegalArgumentException
	 * @throws InvocationTargetException
	 */
	public static <T> T findObjectReturnNull (EntityManager em,Class<T> clzz, String identifier,String idValue) 
	throws InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException
	{
		List<T> listOfObjs = JPAUtils.findObjects(em, clzz, identifier, idValue);
		if (listOfObjs == null || listOfObjs.isEmpty())
			return null;
		if (listOfObjs.size() > 1)
			throw new DataLogicValidationException("Multiple Objects with identifier: " + idValue + " found.");

		T obj = listOfObjs.get(0);
		return obj;
	}

}
