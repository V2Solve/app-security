export class Action
{
	actionName!: string;
	actionDescription!: string;
	appIdentifier!: string;
}

export class Resource 
{
	/**
	 * Name of the Resource
	 */
	name!: string;
	
	/**
	 * The Description of the resource
	 */
	description!: string;
	
	/**
	 * The declaring app.
	 */
	appIdentifier!: string;
}

export class AppClient 
{
	/**
	 * The unique ID by which the client is identified in the system, must be unique in the entire system.
	 */
    clientIdentifier!: string;
    
	/**
	 * Description for the client.
	 */
	description!: string;

	/**
	 * This represents the application which is created and/or is dealing with the client.
	 */
	appIdentifier!: string;  // This could be null, if the client is a global client, or could defined the application for which
	                  		// it has been defined.
}

export class Application
{
	appIdentifier!: string;
    
    shortIdentifier!: string;
    
    appDescription!: string;
}


/**
 * A change log entry..
 */
export class ChangeLog
{
	action!: string;
	changeTitle!: string;
	changedRecord!: string;
	changerId!: string;
	datetime!: Date;
	originalRecord!: string;
	recordIdentifier!: string;
	resource!: string;
	targetId!: string;
}


export class ClientGroupRole {

	// Unique Key within the system of the association.
	key!: string;

	// Name of the group
	groupName!: string;
	
	// Name of the role;
	roleName!: string;	
	
	// Name of the domain if any is associated at this level.
	domainName!: string;

	// Whether it is supposed to be propogated or not..
	propogate!: boolean;
	
	// Owning app for this association.
	appIdentifier!: string;

}



export class ClientRolePermission 
{
	/**
	 *  Unique Key in the system identifying the relationship.
	 */
	key!: string;
	
	// The role, to which the permission is assigned.
	roleName!: string;
	
	
	// The name of the permission in the system
	permissionName!: string;
	
	// Name of the scope if any associated.
	scopeName!: string;
	
	// The owning app
	appIdentifier!: string;
	
	
	// value of the permission. (allow, deny)
	value!: string;
}


export class Domain
{
	/**
	 * Domain Name
	 */
	name: string;
	
	/**
	 * Domain Type
	 */
	domainType: string;
	
	/**
	 * Parent DOmain
	 */
	parentDomain!: Domain;
	
	/**
	 * Description
	 */
	description!: string;
	
	/**
	 * Owning application
	 */
	appIdentifier!: string;
    
    constructor (domainName: string,domainType: string,parentDomain?: Domain,description?: string,appIdentifier?: string)
    {
        this.name=domainName;
        this.domainType=domainType;
        if (appIdentifier != undefined)
            this.appIdentifier = appIdentifier;
        if (parentDomain != undefined)
            this.parentDomain = parentDomain;
        if (description != undefined)
            this.description = description;
    }
}


export class Scope
{
	scopeName: string;
	scopeType: string;
	scopeValue: string;
	description!: string;

	constructor(scopeName: string,scopeType: string,scopeValue: string)
	{
		this.scopeName  = scopeName;
		this.scopeType  = scopeType;
		this.scopeValue = scopeValue;
	}

	// The owning app.
	appIdentifier!: string;
}

export class ClientGroup 
{
	/**
	 * A unique identifier for the object
	 */
	name!: string;
	
	/**
	 * The Description.
	 */
	description!: string;
	
	/**
	 * The owning app if any associated with the  record.
	 */
	appIdentifier!: string;
}


export class ClientRole
{
	/**
	 * A unique identifier for the object
	 */
	name!: string;
	
	/**
	 * The Description.
	 */
	description!: string;
	
	/**
	 * The owning app if any associated with the  record.
	 */
	appIdentifier!: string;
}


export class DomainType
{
	/**
	 * A unique identifier for the object
	 */
	name!: string;
	
	/**
	 * The owning app if any associated with the  record.
	 */
	appIdentifier!: string;
}


export class ScopeType
{
	/**
	 * A unique identifier for the object
	 */
	name!: string;
	
	/**
	 * The owning app if any associated with the  record.
	 */
	appIdentifier!: string;
}



export class Permission
{
	// The unique identifier.
	name!: string;

	/**
	 * THe action of of the permission
	 */
	action!: string;

	resource!: string;

	description!: string; // The description;

	appIdentifier!: string; // Owner App.
}


export class PermitKey
{
	action!: string;
	resource!: string;
}

export class Permit
{
	permitKey!: PermitKey;
	allowed!: boolean;		// whether this is an allowed permission, or a deny..
	domain!: Domain;	        // The domains at which this permit key applies. if null, this is a root domainless permission
							// meaning applies at all domains.
	role!: String;		    // The role because of which this permission is available..
	group!: String;			// The group because of which this permission is available..
	scope!: String;			// The scope of this permit.
	propogate!: boolean;		// Whether the permission is to be propogated down the Domain Hiearchy or not..
}
