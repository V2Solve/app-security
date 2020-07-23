package com.v2solve.app.security.model.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the change_log database table.
 * 
 */
@Entity
@Table(name="change_log")
@NamedQuery(name="ChangeLog.findAll", query="SELECT c FROM ChangeLog c")
public class ChangeLog extends com.v2solve.app.security.common.base.BaseEntity implements Serializable 
{
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String action;
	private String changeTitle;
	private String changedRecord;
	private String changerId;
	private Date datetime;
	private String originalRecord;
	private String recordIdentifier;
	private String resource;
	private String targetId;

	public ChangeLog() {
	}


	@Id
	@SequenceGenerator(name="CHANGE_LOG_ID_GENERATOR", sequenceName="SEQ_CHANGE_LOG_ID",allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="CHANGE_LOG_ID_GENERATOR")
	@Column(unique=true, nullable=false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	@Column(nullable=false, length=50)
	public String getAction() {
		return this.action;
	}

	public void setAction(String action) {
		this.action = action;
	}


	@Column(name="change_title", nullable=false, length=255)
	public String getChangeTitle() {
		return this.changeTitle;
	}

	public void setChangeTitle(String changeTitle) {
		this.changeTitle = changeTitle;
	}


	@Column(name="changed_record", length=2048)
	public String getChangedRecord() {
		return this.changedRecord;
	}

	public void setChangedRecord(String changedRecord) {
		this.changedRecord = changedRecord;
	}


	@Column(name="changer_id", nullable=false, length=255)
	public String getChangerId() {
		return this.changerId;
	}

	public void setChangerId(String changerId) {
		this.changerId = changerId;
	}


	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable=false)
	public Date getDatetime() {
		return this.datetime;
	}

	public void setDatetime(Date datetime) {
		this.datetime = datetime;
	}


	@Column(name="original_record", length=2048)
	public String getOriginalRecord() {
		return this.originalRecord;
	}

	public void setOriginalRecord(String originalRecord) {
		this.originalRecord = originalRecord;
	}


	@Column(name="record_identifier", nullable=false, length=100)
	public String getRecordIdentifier() {
		return this.recordIdentifier;
	}

	public void setRecordIdentifier(String recordIdentifier) {
		this.recordIdentifier = recordIdentifier;
	}


	@Column(nullable=false, length=50)
	public String getResource() {
		return this.resource;
	}

	public void setResource(String resource) {
		this.resource = resource;
	}


	@Column(name="target_id", length=255)
	public String getTargetId() {
		return this.targetId;
	}

	public void setTargetId(String targetId) {
		this.targetId = targetId;
	}

}