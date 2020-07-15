package com.v2solve.app.security.model.entities;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the client_group_membership database table.
 * 
 */
@Entity
@Table(name="client_group_membership")
@NamedQuery(name="ClientGroupMembership.findAll", query="SELECT c FROM ClientGroupMembership c")
public class ClientGroupMembership extends com.v2solve.app.security.common.base.BaseEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private Application application;
	private Client client;
	private ClientGroup clientGroup;

	public ClientGroupMembership() {
	}


	@Id
	@SequenceGenerator(name="CLIENT_GROUP_MEMBERSHIP_ID_GENERATOR", sequenceName="SEQ_CLIENT_GROUP_MEMBERSHIP_ID", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="CLIENT_GROUP_MEMBERSHIP_ID_GENERATOR")
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
	public Application getApplication() {
		return this.application;
	}

	public void setApplication(Application application) {
		this.application = application;
	}


	//bi-directional many-to-one association to Client
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="client_id", nullable=false)
	public Client getClient() {
		return this.client;
	}

	public void setClient(Client client) {
		this.client = client;
	}


	//bi-directional many-to-one association to ClientGroup
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="client_group_id", nullable=false)
	public ClientGroup getClientGroup() {
		return this.clientGroup;
	}

	public void setClientGroup(ClientGroup clientGroup) {
		this.clientGroup = clientGroup;
	}

}