package com.v2solve.app.security.model.entities;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;


/**
 * The persistent class for the resource_domain database table.
 * 
 */
@Entity
@Table(name="resource_domain")
@NamedQuery(name="ResourceDomain.findAll", query="SELECT r FROM ResourceDomain r")
public class ResourceDomain extends com.v2solve.app.security.common.base.BaseEntity implements Serializable 
{
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String description;
	private String name;
	private List<ClientGroupRole> clientGroupRoles;
	private Application application;
	private ResourceDomain resourceDomain;
	private List<ResourceDomain> resourceDomains;
	private ResourceDomainType resourceDomainType;

	public ResourceDomain() {
	}


	@Id
	@SequenceGenerator(name="RESOURCE_DOMAIN_ID_GENERATOR", sequenceName="SEQ_RESOURCE_DOMAIN_ID", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="RESOURCE_DOMAIN_ID_GENERATOR")
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
	@OneToMany(mappedBy="resourceDomain")
	@JsonManagedReference
	public List<ClientGroupRole> getClientGroupRoles() {
		return this.clientGroupRoles;
	}

	public void setClientGroupRoles(List<ClientGroupRole> clientGroupRoles) {
		this.clientGroupRoles = clientGroupRoles;
	}

	public ClientGroupRole addClientGroupRole(ClientGroupRole clientGroupRole) {
		getClientGroupRoles().add(clientGroupRole);
		clientGroupRole.setResourceDomain(this);

		return clientGroupRole;
	}

	public ClientGroupRole removeClientGroupRole(ClientGroupRole clientGroupRole) {
		getClientGroupRoles().remove(clientGroupRole);
		clientGroupRole.setResourceDomain(null);

		return clientGroupRole;
	}


	//bi-directional many-to-one association to Application
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="application_id", nullable=true)
	@JsonBackReference
	public Application getApplication() {
		return this.application;
	}

	public void setApplication(Application application) {
		this.application = application;
	}


	//bi-directional many-to-one association to ResourceDomain
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="parent_id")
	@JsonBackReference
	public ResourceDomain getResourceDomain() {
		return this.resourceDomain;
	}

	public void setResourceDomain(ResourceDomain resourceDomain) {
		this.resourceDomain = resourceDomain;
	}


	//bi-directional many-to-one association to ResourceDomain
	@OneToMany(mappedBy="resourceDomain")
	@JsonManagedReference
	public List<ResourceDomain> getResourceDomains() {
		return this.resourceDomains;
	}

	public void setResourceDomains(List<ResourceDomain> resourceDomains) {
		this.resourceDomains = resourceDomains;
	}

	public ResourceDomain addResourceDomain(ResourceDomain resourceDomain) {
		getResourceDomains().add(resourceDomain);
		resourceDomain.setResourceDomain(this);

		return resourceDomain;
	}

	public ResourceDomain removeResourceDomain(ResourceDomain resourceDomain) {
		getResourceDomains().remove(resourceDomain);
		resourceDomain.setResourceDomain(null);

		return resourceDomain;
	}


	//bi-directional many-to-one association to ResourceDomainType
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="resource_domain_type_id", nullable=false)
	@JsonBackReference
	public ResourceDomainType getResourceDomainType() {
		return this.resourceDomainType;
	}

	public void setResourceDomainType(ResourceDomainType resourceDomainType) {
		this.resourceDomainType = resourceDomainType;
	}

}