package com.v2solve.app.security.model.entities;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;


/**
 * The persistent class for the resource_domain_type database table.
 * 
 */
@Entity
@Table(name="resource_domain_type")
@NamedQuery(name="ResourceDomainType.findAll", query="SELECT r FROM ResourceDomainType r")
public class ResourceDomainType extends com.v2solve.app.security.common.base.BaseEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String name;
	private List<ResourceDomain> resourceDomains;
	private Application application;

	public ResourceDomainType() {
	}


	@Id
	@SequenceGenerator(name="RESOURCE_DOMAIN_TYPE_ID_GENERATOR", sequenceName="SEQ_RESOURCE_DOMAIN_TYPE_ID", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="RESOURCE_DOMAIN_TYPE_ID_GENERATOR")
	@Column(unique=true, nullable=false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	@Column(nullable=false, length=50)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}


	//bi-directional many-to-one association to ResourceDomain
	@OneToMany(mappedBy="resourceDomainType")
	@JsonManagedReference
	public List<ResourceDomain> getResourceDomains() {
		return this.resourceDomains;
	}

	public void setResourceDomains(List<ResourceDomain> resourceDomains) {
		this.resourceDomains = resourceDomains;
	}

	public ResourceDomain addResourceDomain(ResourceDomain resourceDomain) {
		getResourceDomains().add(resourceDomain);
		resourceDomain.setResourceDomainType(this);

		return resourceDomain;
	}

	public ResourceDomain removeResourceDomain(ResourceDomain resourceDomain) {
		getResourceDomains().remove(resourceDomain);
		resourceDomain.setResourceDomainType(null);

		return resourceDomain;
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