package com.v2solve.app.security.extras;

import java.io.PrintWriter;
import com.v2solve.app.security.securitymodel.Domain;

import framework.typescript.TypeScriptClass;

public class CovertToTypeScript {

	public CovertToTypeScript() {
		// TODO Auto-generated constructor stub
	}

	public static void main (String [] args)
	{
		TypeScriptClass tsc = new TypeScriptClass(Domain.class);
		PrintWriter pw  = new PrintWriter(System.out);
		tsc.writeOut(pw);
		pw.flush();
	}

}
