package com.v2solve.app.security.model.entities;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;


/**
 * The persistent class for the basic_auth_clients database table.
 * 
 */
@Entity
@Table(name="basic_auth_clients")
@NamedQuery(name="BasicAuthClient.findAll", query="SELECT b FROM BasicAuthClient b")
public class BasicAuthClient extends com.v2solve.app.security.common.base.BaseEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private Boolean enabled;
	private String name;
	private String userPassword;
	private Application application;

	public BasicAuthClient() {
	}


	@Id
	@SequenceGenerator(name="BASIC_AUTH_CLIENTS_ID_GENERATOR", sequenceName="SEQ_BASIC_AUTH_CLIENTS_ID", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="BASIC_AUTH_CLIENTS_ID_GENERATOR")
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	public Boolean getEnabled() {
		return this.enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}


	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}


	@Column(name="user_password",length = 1024)
	public String getUserPassword() {
		return this.userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
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