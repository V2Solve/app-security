package com.v2solve.app.security.model.entities;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;


/**
 * The persistent class for the client_group database table.
 * 
 */
@Entity
@Table(name="client_group")
@NamedQuery(name="ClientGroup.findAll", query="SELECT c FROM ClientGroup c")
public class ClientGroup extends com.v2solve.app.security.common.base.BaseEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String description;
	private String name;
	private Application application;
	private List<ClientGroupMembership> clientGroupMemberships;
	private List<ClientGroupRole> clientGroupRoles;

	public ClientGroup() {
	}


	@Id
	@SequenceGenerator(name="CLIENT_GROUP_ID_GENERATOR", sequenceName="SEQ_CLIENT_GROUP_ID", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="CLIENT_GROUP_ID_GENERATOR")
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


	//bi-directional many-to-one association to ClientGroupMembership
	@OneToMany(mappedBy="clientGroup")
	@JsonManagedReference
	public List<ClientGroupMembership> getClientGroupMemberships() {
		return this.clientGroupMemberships;
	}

	public void setClientGroupMemberships(List<ClientGroupMembership> clientGroupMemberships) {
		this.clientGroupMemberships = clientGroupMemberships;
	}

	public ClientGroupMembership addClientGroupMembership(ClientGroupMembership clientGroupMembership) {
		getClientGroupMemberships().add(clientGroupMembership);
		clientGroupMembership.setClientGroup(this);

		return clientGroupMembership;
	}

	public ClientGroupMembership removeClientGroupMembership(ClientGroupMembership clientGroupMembership) {
		getClientGroupMemberships().remove(clientGroupMembership);
		clientGroupMembership.setClientGroup(null);

		return clientGroupMembership;
	}


	//bi-directional many-to-one association to ClientGroupRole
	@OneToMany(mappedBy="clientGroup")
	@JsonManagedReference
	public List<ClientGroupRole> getClientGroupRoles() {
		return this.clientGroupRoles;
	}

	public void setClientGroupRoles(List<ClientGroupRole> clientGroupRoles) {
		this.clientGroupRoles = clientGroupRoles;
	}

	public ClientGroupRole addClientGroupRole(ClientGroupRole clientGroupRole) {
		getClientGroupRoles().add(clientGroupRole);
		clientGroupRole.setClientGroup(this);

		return clientGroupRole;
	}

	public ClientGroupRole removeClientGroupRole(ClientGroupRole clientGroupRole) {
		getClientGroupRoles().remove(clientGroupRole);
		clientGroupRole.setClientGroup(null);

		return clientGroupRole;
	}

}