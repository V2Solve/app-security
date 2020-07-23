package com.v2solve.app.security.model.entities;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;


/**
 * The persistent class for the client_role database table.
 * 
 */
@Entity
@Table(name="client_role")
@NamedQuery(name="ClientRole.findAll", query="SELECT c FROM ClientRole c")
public class ClientRole extends com.v2solve.app.security.common.base.BaseEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String description;
	private String name;
	private List<ClientGroupRole> clientGroupRoles;
	private Application application;
	private List<ClientRolePermission> clientRolePermissions;

	public ClientRole() {
	}


	@Id
	@SequenceGenerator(name="CLIENT_ROLE_ID_GENERATOR", sequenceName="SEQ_CLIENT_ROLE_ID", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="CLIENT_ROLE_ID_GENERATOR")
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


	//bi-directional many-to-one association to ClientGroupRole
	@OneToMany(mappedBy="clientRole")
	@JsonManagedReference
	public List<ClientGroupRole> getClientGroupRoles() {
		return this.clientGroupRoles;
	}

	public void setClientGroupRoles(List<ClientGroupRole> clientGroupRoles) {
		this.clientGroupRoles = clientGroupRoles;
	}

	public ClientGroupRole addClientGroupRole(ClientGroupRole clientGroupRole) {
		getClientGroupRoles().add(clientGroupRole);
		clientGroupRole.setClientRole(this);

		return clientGroupRole;
	}

	public ClientGroupRole removeClientGroupRole(ClientGroupRole clientGroupRole) {
		getClientGroupRoles().remove(clientGroupRole);
		clientGroupRole.setClientRole(null);

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


	//bi-directional many-to-one association to ClientRolePermission
	@OneToMany(mappedBy="clientRole")
	@JsonManagedReference
	public List<ClientRolePermission> getClientRolePermissions() {
		return this.clientRolePermissions;
	}

	public void setClientRolePermissions(List<ClientRolePermission> clientRolePermissions) {
		this.clientRolePermissions = clientRolePermissions;
	}

	public ClientRolePermission addClientRolePermission(ClientRolePermission clientRolePermission) {
		getClientRolePermissions().add(clientRolePermission);
		clientRolePermission.setClientRole(this);

		return clientRolePermission;
	}

	public ClientRolePermission removeClientRolePermission(ClientRolePermission clientRolePermission) {
		getClientRolePermissions().remove(clientRolePermission);
		clientRolePermission.setClientRole(null);

		return clientRolePermission;
	}

}