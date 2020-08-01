package com.v2solve.app.security.model.entities;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;


/**
 * The persistent class for the role_scope database table.
 * 
 */
@Entity
@Table(name="role_scope")
@NamedQuery(name="RoleScope.findAll", query="SELECT r FROM RoleScope r")
public class RoleScope extends com.v2solve.app.security.common.base.BaseEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String description;
	private String name;
	private String scopeValue;
	private List<ClientGroupRole> clientGroupRoles;
	private Application application;
	private ScopeType scopeType;

	public RoleScope() {
	}


	@Id
	@SequenceGenerator(name="ROLE_SCOPE_ID_GENERATOR", sequenceName="SEQ_ROLE_SCOPE_ID", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="ROLE_SCOPE_ID_GENERATOR")
	@Column(unique=true, nullable=false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	@Column(length=1024)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}


	@Column(nullable=false, length=50)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}


	@Column(name="scope_value", nullable=false, length=2048)
	public String getScopeValue() {
		return this.scopeValue;
	}

	public void setScopeValue(String scopeValue) {
		this.scopeValue = scopeValue;
	}


	//bi-directional many-to-one association to ClientGroupRole
	@OneToMany(mappedBy="roleScope")
	@JsonManagedReference
	public List<ClientGroupRole> getClientGroupRoles() {
		return this.clientGroupRoles;
	}

	public void setClientGroupRoles(List<ClientGroupRole> clientGroupRoles) {
		this.clientGroupRoles = clientGroupRoles;
	}

	public ClientGroupRole addClientGroupRole(ClientGroupRole clientGroupRole) {
		getClientGroupRoles().add(clientGroupRole);
		clientGroupRole.setRoleScope(this);

		return clientGroupRole;
	}

	public ClientGroupRole removeClientGroupRole(ClientGroupRole clientGroupRole) {
		getClientGroupRoles().remove(clientGroupRole);
		clientGroupRole.setRoleScope(null);

		return clientGroupRole;
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


	//bi-directional many-to-one association to ScopeType
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="scope_type_id", nullable=false)
	@JsonBackReference
	public ScopeType getScopeType() {
		return this.scopeType;
	}

	public void setScopeType(ScopeType scopeType) {
		this.scopeType = scopeType;
	}

}