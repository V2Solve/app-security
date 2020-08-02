import { Scope, Domain, ChangeLog, AppClient, Resource, Permission, Application, Action, ClientGroupRole, ClientGroup, ClientRole, ClientRolePermission, DomainType, ScopeType } from "../model/model";

export class PagingInformation
{
	// may be set in request or response
	currentPage!: Number;
	
	// usually set in requests..
	pageSize!: Number;
	
	// may be set in request or response..
	noOfPages!: Number;
	
	// may be set in the response
	totalNoOfRecords!: Number;
	
	// may be set in the response.
	recordsReturned!: Number;	
}

export class SortInfo 
{
	sortField!: string;
	sortDirection!: string;
}


export class SortingInformation
{
	
	/**
	 * List of Sorts that need to be applied to a query..
	 */
	sorts!: Array<SortInfo>;
}

export class RequestStatusInformation
{
	statusCode!: string;
	statusMessage!: string;
	
	public static standardSuccessCode: string = "Succeeded";
	public static standardFailureCode: string = "Failed";
	public static standardSuccessMessage: string = "Operation Succeeded";
	public static standardFailureMessage: string = "Operation Failed";
}


export class ClientSecurityContext
{
	// The client for which this SecurityContext is present.
	client!: AppClient;
}

/**
 * The request and response classes start from here..
 */
export  class BaseRequest
{
	/**
	 * Unique Calling Client Id;
	 */
	callingClientId!: string;
	
	/**
	 * Additional groups that the client must be assumed to belong to 
	 *
	 */
	groups!: Array<string>;

	/**
	 * How the response should be paged, can be passed in this data object
	 */
	pagingInfo!: PagingInformation;

	/**
	 * The response should be sorted can also be passed in this dataobject.
	 */
	sortingInfo!: SortingInformation;
}


export class BaseResponse
{
	
	// will specific what the status is. (error, or success depending on the code)
	status!: RequestStatusInformation;
	
	// In case of paging enabled the number of records returned could be held in here..
	pageInfo!: RequestStatusInformation;
}

export  class SecurityAPIRequest extends BaseRequest
{
	/**
	 * Request Parameters - depending on the request some of these would be set.
	 */
	action!: string;
	resource!: string;
	roleName!: string;
	groupName!: string;
	scope!: Scope;
	resourceDomain!: Domain;	

	resources!: string [];
}


export class SearchChangeLogRequest extends BaseRequest 
{
	/**
	 * Fields that can be used in searching..
	 */
	action!: string;
	resource!: string;
	changeTitle!: string;
	changerId!: string;
	recordIdentifier!: string;
	fromDate!: Date;
	toDate!: Date;
}

export class SearchChangeLogResponse extends BaseResponse
{
	// The result of the change search.
	changes!: Array<ChangeLog>;
}

export class SecurityAPIResponse extends BaseResponse
{

	/**
	 * Information about the client.
	 */
	clientSecurityContext!: ClientSecurityContext;

	/**
	 * Used for true false type of return data..
	 */
	result!: boolean;
	
	// Group Names
	groups!: Array<string>;
	
	// Role Names;
	roles!: Array<string>;
	
	// Array of scopes
	scopes!: Array<Scope>;

	results!: boolean [];
}

export class CreateApplicationRequest extends BaseRequest
{
	appIdentifier!: string;
	appShortIdentifier!: string;
	description!: string;
}

export  class CreateApplicationResponse extends BaseResponse
{
	
}

export class DeleteApplicationRequest extends BaseRequest
{
	appIdentifier!: string;
}

export  class DeleteApplicationResponse extends BaseResponse
{
	
}


export class CreateClientRequest extends BaseRequest 
{

	/**
	 * The Application ID which is creating this client , if null, it means its a global client.
	 */
	appIdentifier!: string;
	
	/**
	 * Unique Identifier for the client.
	 */
	clientIdentifier!: string;
	
	
	/**
	 * The description of the client.
	 */
	description!: string;
}


export class SearchClientRequest extends CreateClientRequest{
}

export class SearchClientResponse extends BaseResponse {
	clients!: AppClient [];
}


export class CreateClientResponse extends BaseResponse {
}

export class DeleteClientRequest extends BaseRequest {
	/**
	 * Unique Identifier for the client.
	 */
	clientIdentifier!: string;
}


export class DeleteClientResponse extends BaseResponse {
}


export class CreateClientGroupRequest extends BaseRequest {
	
	name!: string;
	description!: string;
	appIdentifier!: string;
}

export class CreateClientGroupResponse extends BaseResponse {

}

export class CreateGroupMembershipRequest extends BaseRequest {
	/**
	 * 
	 */
	
	
	/**
	 * The application if any is creating this association..
	 */
	appIdentifier!: string;
	
	/**
	 *  The client which needs to be associated.
	 */
	clientIdentifier!: string;
	
	/**
	 * The Group which needs to be associated.
	 */
	clientGroupIdentifier!: string;
}


export class CreateGroupMembershipResponse extends BaseResponse {

}

export class DeleteClientGroupRequest extends BaseRequest {

	/**
	 * 
	 */
	
	
	
	/**
	 * Name of the group to delete..
	 */
	name!: string;
}


export class DeleteClientGroupResponse extends BaseResponse {
}

export class DeleteGroupMembershipRequest extends BaseRequest {
	/**
	 * 
	 */
	clientGroupIdentifier!: string;
	clientIdentifier!: string;
}


export class DeleteGroupMembershipResponse extends BaseResponse {
	/**
	 * 
	 */
}


export class CreateActionRequest extends BaseRequest
{
	name!: string;
	description!: string;
	appIdentifier!: string;
}


export class CreateActionResponse extends BaseResponse {
}


export class CreatePermissionRequest extends BaseRequest {

	/**
	 * The identifier of the application that will Own ther permit.
	 */
	appIdentifier!: string;
	
	/**
	 * The name of the permission
	 */
	name!: string;
	
	/**
	 * Description of the permission
	 */
	description!: string;
	
	/**
	 * actionName for this permission
	 */
	actionName!: string;
	
	/**
	 * Resource name for this permission
	 */
	resourceName!: string;
}

export class CreatePermissionResponse extends BaseResponse {
}




export class CreateResourceRequest extends BaseRequest 
{
	name!: string;
	description!: string;
	appIdentifier!: string;
}

export class CreateResourceResponse extends BaseResponse {
}


export class SearchResourceRequest extends CreateResourceRequest{
}

export class SearchResourceResponse extends BaseResponse {
	resources!:  Resource [];
}

export class DeleteResourceRequest extends BaseRequest {
	
	/**
	 * Name of the resource to be deleted.
	 */
	name!: string;
}


export class DeleteResourceResponse extends BaseResponse {
}


export class DeleteActionRequest extends BaseRequest {
	/**
	 * The name of the action that needs to be deleted..
	 */
	name!: string;
}


export class DeleteActionResponse extends BaseResponse {
}


export class DeletePermissionRequest extends BaseRequest {
	/**
	 * The permission name to be deleted..
	 */
	name!: string;
}


export class DeletePermissionResponse extends BaseResponse {
	
}


export class SearchPermissionRequest extends CreatePermissionRequest {

}

export class SearchPermissionResponse extends BaseResponse {

	permissions!: Permission [];
}

export class CreateClientGroupRoleRequest extends BaseRequest 
{
		// The group,
		groupName!: string;
		
		// The role
		roleName!: string;
		
		// The domain
		domainName!: string;

		// Propogation:
		propogate!: boolean;
		
		// The scope
		scopeName!: string;
		
		// The appIdentifier.
		appIdentifier!: string;
}


export class CreateClientGroupRoleResponse extends BaseResponse {
}

export class CreateClientRolePermissionRequest extends BaseRequest 
{
	// The role, to which the permission is assigned.
	roleName!: string;
	
	
	// The name of the permission in the system
	permissionName!: string;
	
	
	// The owning app
	appIdentifier!: string;
	
	
	// value of the permission. (allow, deny)
	value!: string;
}

export class CreateClientRolePermissionResponse extends BaseResponse {
}

export class DeleteClientRolePermissionRequest extends BaseRequest {
	// The unique relation ship key in the system.
	key!: string;
}

export class DeleteClientRolePermissionResponse extends BaseResponse {
}





export class CreateClientRoleRequest extends BaseRequest 
{
	name!: string;
	
	description!: string;
	
	appIdentifier!: string;
}


export class CreateClientRoleResponse extends BaseResponse {
}


export class DeleteClientGroupRoleRequest extends BaseRequest {
	// The unique relation ship key in the system.
	key!: string;
}


export class DeleteClientGroupRoleResponse extends BaseResponse {
}

export class DeleteClientRoleRequest extends BaseRequest {
	
	 name!: string;
	 description!: string;
	 appIdentifier!: string;
}

export class DeleteClientRoleResponse extends BaseResponse {

}


export class CreateDomainRequest extends BaseRequest 
{
	
	/**
	 * Name of the domain
	 */
	name!: string;
	
	/**
	 * Description
	 */
	description!: string;
	
	
	/**
	 * Owning App
	 */
	appIdentifier!: string;
	
	/**
	 * The Parent Domain.
	 */
	parentDomain!: string;
	
	/**
	 * The Type of domain it is.
	 */
	domainType!: string;
}

export class CreateDomainResponse extends BaseResponse {
}




export class CreateDomainTypeRequest extends BaseRequest {
	name!: string;
	appIdentifier!: string;
}


export class CreateDomainTypeResponse extends BaseResponse {
}



export class CreateScopeRequest extends BaseRequest 
{
	// Name of the scope
	name!: string;

	// description
	description!: string;

	// Value of the scope
	value!: string;

	// Type of scope
	scopeType!: string;

	// Owning Application
	appIdentifier!: string;
}


export class CreateScopeResponse extends BaseResponse {
}

export class DeleteScopeRequest extends BaseRequest {
	// The name of the scope to delete.
	name!: string;
}

export class DeleteScopeResponse extends BaseResponse {
}


export class SearchScopeRequest extends CreateScopeRequest {

}

export class SearchScopeResponse extends BaseResponse {
	scopes!: Scope [];
}



export class CreateScopeTypeRequest extends BaseRequest {

	name!: string;
	appIdentifier!: string;
}


export class CreateScopeTypeResponse extends BaseResponse {
}


export class DeleteDomainRequest extends BaseRequest {
	name!: string;
}

export class DeleteDomainResponse extends BaseResponse {
}

export class DeleteDomainTypeRequest extends BaseRequest {

	name!: string;
}

export class DeleteDomainTypeResponse extends BaseResponse {
}


export class DeleteScopeTypeRequest extends BaseRequest {

	name!: string;
}


export class DeleteScopeTypeResponse extends BaseResponse {
}


export class SearchApplicationsRequest extends BaseRequest
{
	appIdentifier!: string;
}

export class SearchApplicationsResponse extends BaseResponse {

	applications!:  Application [];
}

export class SearchActionRequest extends CreateActionRequest{
}

export class SearchActionResponse extends BaseResponse {
	actions!:  Action [];
}

export class SearchClientGroupRoleRequest extends CreateClientGroupRoleRequest {
}

export class SearchClientGroupRoleResponse extends BaseResponse {
	clientGroupRoles!: ClientGroupRole []
}


export class SearchClientGroupRequest extends CreateClientGroupRequest {

	// Setting this should get the groups assigned to the client.
	forClientIdentifier!: string;
}

export class SearchClientGroupResponse extends BaseResponse{
	clientGroups!: ClientGroup [];
}


export class SearchClientRoleRequest extends CreateClientRoleRequest {
}

export class SearchClientRoleResponse extends BaseResponse{
	clientRoles!: ClientRole [];
}

export class SearchClientRolePermissionRequest extends CreateClientRolePermissionRequest {
}

export class SearchClientRolePermissionResponse extends BaseResponse{
	clientRolePermissions!: ClientRolePermission [];
}

export class SearchDomainTypeRequest extends CreateDomainTypeRequest {
}

export class SearchDomainTypeResponse extends BaseResponse{
	domainTypes!: DomainType [];
}

export class SearchDomainRequest extends CreateDomainRequest {
}

export class SearchDomainResponse extends BaseResponse{
	domains!: Domain [];
}

export class SearchScopeTypeRequest extends CreateScopeTypeRequest {
}

export class SearchScopeTypeResponse extends BaseResponse{
	scopeTypes!: ScopeType [];
}