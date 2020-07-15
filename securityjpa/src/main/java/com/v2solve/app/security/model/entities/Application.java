package com.v2solve.app.security.model.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the application database table.
 * 
 */
@Entity
@Table(name="application")
@NamedQuery(name="Application.findAll", query="SELECT a FROM Application a")
public class Application extends com.v2solve.app.security.common.base.BaseEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String appIdentifier;
	private String appShortIdentifier;
	private String description;
	private List<Action> actions;
	private List<Client> clients;
	private List<ClientGroup> clientGroups;
	private List<ClientGroupMembership> clientGroupMemberships;
	private List<ClientGroupRole> clientGroupRoles;
	private List<ClientRole> clientRoles;
	private List<ClientRolePermission> clientRolePermissions;
	private List<Permission> permissions;
	private List<Resource> resources;
	private List<ResourceDomain> resourceDomains;
	private List<RoleScope> roleScopes;
	private List<ResourceDomainType> resourceDomainTypes;
	private List<ScopeType> scopeTypes;

	public Application() {
	}


	@Id
	@SequenceGenerator(name="APPLICATION_ID_GENERATOR", sequenceName="SEQ_APPLICATION_ID", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="APPLICATION_ID_GENERATOR")
	@Column(unique=true, nullable=false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	@Column(name="app_identifier", nullable=false, length=255)
	public String getAppIdentifier() {
		return this.appIdentifier;
	}

	public void setAppIdentifier(String appIdentifier) {
		this.appIdentifier = appIdentifier;
	}


	@Column(name="app_short_identifier", length=20)
	public String getAppShortIdentifier() {
		return this.appShortIdentifier;
	}

	public void setAppShortIdentifier(String appShortIdentifier) {
		this.appShortIdentifier = appShortIdentifier;
	}


	@Column(length=1024)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}


	//bi-directional many-to-one association to Action
	@OneToMany(mappedBy="application")
	public List<Action> getActions() {
		return this.actions;
	}

	public void setActions(List<Action> actions) {
		this.actions = actions;
	}

	public Action addAction(Action action) {
		getActions().add(action);
		action.setApplication(this);

		return action;
	}

	public Action removeAction(Action action) {
		getActions().remove(action);
		action.setApplication(null);

		return action;
	}


	//bi-directional many-to-one association to Client
	@OneToMany(mappedBy="application")
	public List<Client> getClients() {
		return this.clients;
	}

	public void setClients(List<Client> clients) {
		this.clients = clients;
	}

	public Client addClient(Client client) {
		getClients().add(client);
		client.setApplication(this);

		return client;
	}

	public Client removeClient(Client client) {
		getClients().remove(client);
		client.setApplication(null);

		return client;
	}


	//bi-directional many-to-one association to ClientGroup
	@OneToMany(mappedBy="application")
	public List<ClientGroup> getClientGroups() {
		return this.clientGroups;
	}

	public void setClientGroups(List<ClientGroup> clientGroups) {
		this.clientGroups = clientGroups;
	}

	public ClientGroup addClientGroup(ClientGroup clientGroup) {
		getClientGroups().add(clientGroup);
		clientGroup.setApplication(this);

		return clientGroup;
	}

	public ClientGroup removeClientGroup(ClientGroup clientGroup) {
		getClientGroups().remove(clientGroup);
		clientGroup.setApplication(null);

		return clientGroup;
	}


	//bi-directional many-to-one association to ClientGroupMembership
	@OneToMany(mappedBy="application")
	public List<ClientGroupMembership> getClientGroupMemberships() {
		return this.clientGroupMemberships;
	}

	public void setClientGroupMemberships(List<ClientGroupMembership> clientGroupMemberships) {
		this.clientGroupMemberships = clientGroupMemberships;
	}

	public ClientGroupMembership addClientGroupMembership(ClientGroupMembership clientGroupMembership) {
		getClientGroupMemberships().add(clientGroupMembership);
		clientGroupMembership.setApplication(this);

		return clientGroupMembership;
	}

	public ClientGroupMembership removeClientGroupMembership(ClientGroupMembership clientGroupMembership) {
		getClientGroupMemberships().remove(clientGroupMembership);
		clientGroupMembership.setApplication(null);

		return clientGroupMembership;
	}


	//bi-directional many-to-one association to ClientGroupRole
	@OneToMany(mappedBy="application")
	public List<ClientGroupRole> getClientGroupRoles() {
		return this.clientGroupRoles;
	}

	public void setClientGroupRoles(List<ClientGroupRole> clientGroupRoles) {
		this.clientGroupRoles = clientGroupRoles;
	}

	public ClientGroupRole addClientGroupRole(ClientGroupRole clientGroupRole) {
		getClientGroupRoles().add(clientGroupRole);
		clientGroupRole.setApplication(this);

		return clientGroupRole;
	}

	public ClientGroupRole removeClientGroupRole(ClientGroupRole clientGroupRole) {
		getClientGroupRoles().remove(clientGroupRole);
		clientGroupRole.setApplication(null);

		return clientGroupRole;
	}


	//bi-directional many-to-one association to ClientRole
	@OneToMany(mappedBy="application")
	public List<ClientRole> getClientRoles() {
		return this.clientRoles;
	}

	public void setClientRoles(List<ClientRole> clientRoles) {
		this.clientRoles = clientRoles;
	}

	public ClientRole addClientRole(ClientRole clientRole) {
		getClientRoles().add(clientRole);
		clientRole.setApplication(this);

		return clientRole;
	}

	public ClientRole removeClientRole(ClientRole clientRole) {
		getClientRoles().remove(clientRole);
		clientRole.setApplication(null);

		return clientRole;
	}


	//bi-directional many-to-one association to ClientRolePermission
	@OneToMany(mappedBy="application")
	public List<ClientRolePermission> getClientRolePermissions() {
		return this.clientRolePermissions;
	}

	public void setClientRolePermissions(List<ClientRolePermission> clientRolePermissions) {
		this.clientRolePermissions = clientRolePermissions;
	}

	public ClientRolePermission addClientRolePermission(ClientRolePermission clientRolePermission) {
		getClientRolePermissions().add(clientRolePermission);
		clientRolePermission.setApplication(this);

		return clientRolePermission;
	}

	public ClientRolePermission removeClientRolePermission(ClientRolePermission clientRolePermission) {
		getClientRolePermissions().remove(clientRolePermission);
		clientRolePermission.setApplication(null);

		return clientRolePermission;
	}


	//bi-directional many-to-one association to Permission
	@OneToMany(mappedBy="application")
	public List<Permission> getPermissions() {
		return this.permissions;
	}

	public void setPermissions(List<Permission> permissions) {
		this.permissions = permissions;
	}

	public Permission addPermission(Permission permission) {
		getPermissions().add(permission);
		permission.setApplication(this);

		return permission;
	}

	public Permission removePermission(Permission permission) {
		getPermissions().remove(permission);
		permission.setApplication(null);

		return permission;
	}


	//bi-directional many-to-one association to Resource
	@OneToMany(mappedBy="application")
	public List<Resource> getResources() {
		return this.resources;
	}

	public void setResources(List<Resource> resources) {
		this.resources = resources;
	}

	public Resource addResource(Resource resource) {
		getResources().add(resource);
		resource.setApplication(this);

		return resource;
	}

	public Resource removeResource(Resource resource) {
		getResources().remove(resource);
		resource.setApplication(null);

		return resource;
	}


	//bi-directional many-to-one association to ResourceDomain
	@OneToMany(mappedBy="application")
	public List<ResourceDomain> getResourceDomains() {
		return this.resourceDomains;
	}

	public void setResourceDomains(List<ResourceDomain> resourceDomains) {
		this.resourceDomains = resourceDomains;
	}

	public ResourceDomain addResourceDomain(ResourceDomain resourceDomain) {
		getResourceDomains().add(resourceDomain);
		resourceDomain.setApplication(this);

		return resourceDomain;
	}

	public ResourceDomain removeResourceDomain(ResourceDomain resourceDomain) {
		getResourceDomains().remove(resourceDomain);
		resourceDomain.setApplication(null);

		return resourceDomain;
	}


	//bi-directional many-to-one association to RoleScope
	@OneToMany(mappedBy="application")
	public List<RoleScope> getRoleScopes() {
		return this.roleScopes;
	}

	public void setRoleScopes(List<RoleScope> roleScopes) {
		this.roleScopes = roleScopes;
	}

	public RoleScope addRoleScope(RoleScope roleScope) {
		getRoleScopes().add(roleScope);
		roleScope.setApplication(this);

		return roleScope;
	}

	public RoleScope removeRoleScope(RoleScope roleScope) {
		getRoleScopes().remove(roleScope);
		roleScope.setApplication(null);

		return roleScope;
	}


	//bi-directional many-to-one association to ResourceDomainType
	@OneToMany(mappedBy="application")
	public List<ResourceDomainType> getResourceDomainTypes() {
		return this.resourceDomainTypes;
	}

	public void setResourceDomainTypes(List<ResourceDomainType> resourceDomainTypes) {
		this.resourceDomainTypes = resourceDomainTypes;
	}

	public ResourceDomainType addResourceDomainType(ResourceDomainType resourceDomainType) {
		getResourceDomainTypes().add(resourceDomainType);
		resourceDomainType.setApplication(this);

		return resourceDomainType;
	}

	public ResourceDomainType removeResourceDomainType(ResourceDomainType resourceDomainType) {
		getResourceDomainTypes().remove(resourceDomainType);
		resourceDomainType.setApplication(null);

		return resourceDomainType;
	}


	//bi-directional many-to-one association to ScopeType
	@OneToMany(mappedBy="application")
	public List<ScopeType> getScopeTypes() {
		return this.scopeTypes;
	}

	public void setScopeTypes(List<ScopeType> scopeTypes) {
		this.scopeTypes = scopeTypes;
	}

	public ScopeType addScopeType(ScopeType scopeType) {
		getScopeTypes().add(scopeType);
		scopeType.setApplication(this);

		return scopeType;
	}

	public ScopeType removeScopeType(ScopeType scopeType) {
		getScopeTypes().remove(scopeType);
		scopeType.setApplication(null);

		return scopeType;
	}

}