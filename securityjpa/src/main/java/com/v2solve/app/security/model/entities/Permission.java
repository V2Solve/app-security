package com.v2solve.app.security.model.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the permission database table.
 * 
 */
@Entity
@Table(name="permission")
@NamedQuery(name="Permission.findAll", query="SELECT p FROM Permission p")
public class Permission extends com.v2solve.app.security.common.base.BaseEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String description;
	private String name;
	private List<ClientRolePermission> clientRolePermissions;
	private Action action;
	private Application application;
	private Resource resource;

	public Permission() {
	}


	@Id
	@SequenceGenerator(name="PERMISSION_ID_GENERATOR", sequenceName="SEQ_PERMISSION_ID", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="PERMISSION_ID_GENERATOR")
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


	//bi-directional many-to-one association to ClientRolePermission
	@OneToMany(mappedBy="permission")
	public List<ClientRolePermission> getClientRolePermissions() {
		return this.clientRolePermissions;
	}

	public void setClientRolePermissions(List<ClientRolePermission> clientRolePermissions) {
		this.clientRolePermissions = clientRolePermissions;
	}

	public ClientRolePermission addClientRolePermission(ClientRolePermission clientRolePermission) {
		getClientRolePermissions().add(clientRolePermission);
		clientRolePermission.setPermission(this);

		return clientRolePermission;
	}

	public ClientRolePermission removeClientRolePermission(ClientRolePermission clientRolePermission) {
		getClientRolePermissions().remove(clientRolePermission);
		clientRolePermission.setPermission(null);

		return clientRolePermission;
	}


	//bi-directional many-to-one association to Action
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="action_id", nullable=false)
	public Action getAction() {
		return this.action;
	}

	public void setAction(Action action) {
		this.action = action;
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


	//bi-directional many-to-one association to Resource
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="resource_id", nullable=false)
	public Resource getResource() {
		return this.resource;
	}

	public void setResource(Resource resource) {
		this.resource = resource;
	}

}