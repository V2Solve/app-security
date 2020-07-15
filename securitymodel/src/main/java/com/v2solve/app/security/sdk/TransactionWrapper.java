package com.v2solve.app.security.sdk;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

public class TransactionWrapper 
{
	EntityManager em = null;
	EntityTransaction t = null;
	boolean toFlush = false;
	boolean flushed = false;
	boolean success = false;
	
	public TransactionWrapper(EntityManager em) 
	{
		this.em = em;
		t = em.getTransaction();
		if (!t.isActive())
		{
			t.begin();
			toFlush = true;
		}
	}
	
	public void success ()
	{
		success = true;
	}

	public void successAndCommit ()
	{
		success = true;
	}
	
	public void commit() 
	{
		if (!flushed)
		{
			if (toFlush)
			{
				if (success)
					t.commit();
				else
					t.rollback();
				flushed = true;
			}
		}
	}
}
