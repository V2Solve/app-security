package com.v2solve.app.security.model.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the scope_type database table.
 * 
 */
@Entity
@Table(name="scope_type")
@NamedQuery(name="ScopeType.findAll", query="SELECT s FROM ScopeType s")
public class ScopeType extends com.v2solve.app.security.common.base.BaseEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String name;
	private List<RoleScope> roleScopes;
	private Application application;

	public ScopeType() {
	}


	@Id
	@SequenceGenerator(name="SCOPE_TYPE_ID_GENERATOR", sequenceName="SEQ_SCOPE_TYPE_ID", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="SCOPE_TYPE_ID_GENERATOR")
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


	//bi-directional many-to-one association to RoleScope
	@OneToMany(mappedBy="scopeType")
	public List<RoleScope> getRoleScopes() {
		return this.roleScopes;
	}

	public void setRoleScopes(List<RoleScope> roleScopes) {
		this.roleScopes = roleScopes;
	}

	public RoleScope addRoleScope(RoleScope roleScope) {
		getRoleScopes().add(roleScope);
		roleScope.setScopeType(this);

		return roleScope;
	}

	public RoleScope removeRoleScope(RoleScope roleScope) {
		getRoleScopes().remove(roleScope);
		roleScope.setScopeType(null);

		return roleScope;
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

}