package com.v2solve.app.security.model.entities;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the client_role_permissions database table.
 * 
 */
@Entity
@Table(name="client_role_permissions")
@NamedQuery(name="ClientRolePermission.findAll", query="SELECT c FROM ClientRolePermission c")
public class ClientRolePermission extends com.v2solve.app.security.common.base.BaseEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String value;
	private Application application;
	private ClientRole clientRole;
	private Permission permission;

	public ClientRolePermission() {
	}


	@Id
	@SequenceGenerator(name="CLIENT_ROLE_PERMISSIONS_ID_GENERATOR", sequenceName="SEQ_CLIENT_ROLE_PERMISSIONS_ID", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="CLIENT_ROLE_PERMISSIONS_ID_GENERATOR")
	@Column(unique=true, nullable=false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	@Column(nullable=false, length=20)
	public String getValue() {
		return this.value;
	}

	public void setValue(String value) {
		this.value = value;
	}


	//bi-directional many-to-one association to Application
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="application_id")
	public Application getApplication() {
		return this.application;
	}

	public void setApplication(Application application) {
		this.application = application;
	}


	//bi-directional many-to-one association to ClientRole
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="client_role_id", nullable=false)
	public ClientRole getClientRole() {
		return this.clientRole;
	}

	public void setClientRole(ClientRole clientRole) {
		this.clientRole = clientRole;
	}


	//bi-directional many-to-one association to Permission
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="permission_id", nullable=false)
	public Permission getPermission() {
		return this.permission;
	}

	public void setPermission(Permission permission) {
		this.permission = permission;
	}

}