package com.v2solve.app.security.restmodel;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 
 * This class represents the sort information for a field.
 * 
 * @author Saurin Magiawala
 *
 */

@Data
@NoArgsConstructor
public class SortInfo 
{
	String sortField;
	String sortDirection;
}
