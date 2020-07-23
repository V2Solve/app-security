package com.v2solve.app.security.model.entities;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;


/**
 * The persistent class for the resource database table.
 * 
 */
@Entity
@Table(name="resource")
@NamedQuery(name="Resource.findAll", query="SELECT r FROM Resource r")
public class Resource extends com.v2solve.app.security.common.base.BaseEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String description;
	private String name;
	private List<Permission> permissions;
	private Application application;

	public Resource() {
	}


	@Id
	@SequenceGenerator(name="RESOURCE_ID_GENERATOR", sequenceName="SEQ_RESOURCE_ID", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="RESOURCE_ID_GENERATOR")
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


	//bi-directional many-to-one association to Permission
	@OneToMany(mappedBy="resource")
	@JsonManagedReference
	public List<Permission> getPermissions() {
		return this.permissions;
	}

	public void setPermissions(List<Permission> permissions) {
		this.permissions = permissions;
	}

	public Permission addPermission(Permission permission) {
		getPermissions().add(permission);
		permission.setResource(this);

		return permission;
	}

	public Permission removePermission(Permission permission) {
		getPermissions().remove(permission);
		permission.setResource(null);

		return permission;
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

}