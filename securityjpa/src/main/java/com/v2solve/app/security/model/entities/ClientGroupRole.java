package com.v2solve.app.security.model.entities;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;


/**
 * The persistent class for the client_group_roles database table.
 * 
 */
@Entity
@Table(name="client_group_roles")
@NamedQuery(name="ClientGroupRole.findAll", query="SELECT c FROM ClientGroupRole c")
public class ClientGroupRole extends com.v2solve.app.security.common.base.BaseEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private Application application;
	private ClientGroup clientGroup;
	private ClientRole clientRole;
	private Boolean propogate;
	private ResourceDomain resourceDomain;
	private RoleScope roleScope;

	public ClientGroupRole() {
	}


	@Id
	@SequenceGenerator(name="CLIENT_GROUP_ROLES_ID_GENERATOR", sequenceName="SEQ_CLIENT_GROUP_ROLES_ID", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="CLIENT_GROUP_ROLES_ID_GENERATOR")
	@Column(unique=true, nullable=false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	//bi-directional many-to-one association to Application
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="application_id")
	@JsonBackReference
	public Application getApplication() {
		return this.application;
	}

	public void setApplication(Application application) {
		this.application = application;
	}


	//bi-directional many-to-one association to ClientGroup
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="client_group_id", nullable=false)
	@JsonBackReference
	public ClientGroup getClientGroup() {
		return this.clientGroup;
	}

	public void setClientGroup(ClientGroup clientGroup) {
		this.clientGroup = clientGroup;
	}


	//bi-directional many-to-one association to ClientRole
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="client_role_id", nullable=false)
	@JsonBackReference
	public ClientRole getClientRole() {
		return this.clientRole;
	}

	public void setClientRole(ClientRole clientRole) {
		this.clientRole = clientRole;
	}

	@Column(nullable=false)
	public Boolean getPropogate() {
		return this.propogate;
	}

	public void setPropogate(Boolean propogate) {
		this.propogate = propogate;
	}

	//bi-directional many-to-one association to ResourceDomain
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="resource_domain_id")
	@JsonBackReference
	public ResourceDomain getResourceDomain() {
		return this.resourceDomain;
	}

	public void setResourceDomain(ResourceDomain resourceDomain) {
		this.resourceDomain = resourceDomain;
	}


	//bi-directional many-to-one association to RoleScope
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="role_scope_id")
	@JsonBackReference
	public RoleScope getRoleScope() {
		return this.roleScope;
	}

	public void setRoleScope(RoleScope roleScope) {
		this.roleScope = roleScope;
	}

}