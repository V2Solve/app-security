package com.v2solve.app.security.model.entities;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;


/**
 * The persistent class for the client database table.
 * 
 */
@Entity
@Table(name="client")
@NamedQuery(name="Client.findAll", query="SELECT c FROM Client c")
public class Client extends com.v2solve.app.security.common.base.BaseEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String clientIdentifier;
	private String description;
	private Application application;
	private List<ClientGroupMembership> clientGroupMemberships;

	public Client() {
	}


	@Id
	@SequenceGenerator(name="CLIENT_ID_GENERATOR", sequenceName="SEQ_CLIENT_ID", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="CLIENT_ID_GENERATOR")
	@Column(unique=true, nullable=false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	@Column(name="client_identifier", nullable=false, length=255)
	public String getClientIdentifier() {
		return this.clientIdentifier;
	}

	public void setClientIdentifier(String clientIdentifier) {
		this.clientIdentifier = clientIdentifier;
	}


	@Column(length=1024)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
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
	@OneToMany(mappedBy="client")
	@JsonManagedReference
	public List<ClientGroupMembership> getClientGroupMemberships() {
		return this.clientGroupMemberships;
	}

	public void setClientGroupMemberships(List<ClientGroupMembership> clientGroupMemberships) {
		this.clientGroupMemberships = clientGroupMemberships;
	}

	public ClientGroupMembership addClientGroupMembership(ClientGroupMembership clientGroupMembership) {
		getClientGroupMemberships().add(clientGroupMembership);
		clientGroupMembership.setClient(this);

		return clientGroupMembership;
	}

	public ClientGroupMembership removeClientGroupMembership(ClientGroupMembership clientGroupMembership) {
		getClientGroupMemberships().remove(clientGroupMembership);
		clientGroupMembership.setClient(null);

		return clientGroupMembership;
	}

}