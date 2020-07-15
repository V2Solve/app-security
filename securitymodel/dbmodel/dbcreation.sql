CREATE TABLE APPLICATION (
                id INTEGER NOT NULL,
                app_identifier VARCHAR(255) NOT NULL,
                app_short_identifier VARCHAR(20),
                description VARCHAR(1024),
                CONSTRAINT application_pkid PRIMARY KEY (id)
);


CREATE UNIQUE INDEX application_idx
 ON APPLICATION
 ( app_short_identifier );

CREATE UNIQUE INDEX application_idx1
 ON APPLICATION
 ( app_identifier );

CREATE TABLE RESOURCE_DOMAIN_TYPE (
                id INTEGER NOT NULL,
                name VARCHAR(50) NOT NULL,
                APPLICATION_id INTEGER,
                CONSTRAINT resource_domain_type_pk PRIMARY KEY (id)
);


CREATE UNIQUE INDEX resource_domain_type_idx
 ON RESOURCE_DOMAIN_TYPE
 ( name );

CREATE TABLE SCOPE_TYPE (
                id INTEGER NOT NULL,
                name VARCHAR(50) NOT NULL,
                APPLICATION_id INTEGER,
                CONSTRAINT scope_type_pk PRIMARY KEY (id)
);


CREATE UNIQUE INDEX scope_type_idx
 ON SCOPE_TYPE
 ( name );

CREATE TABLE ROLE_SCOPE (
                id INTEGER NOT NULL,
                name VARCHAR(50) NOT NULL,
                description VARCHAR(1024),
                SCOPE_VALUE VARCHAR(2048) NOT NULL,
                APPLICATION_id INTEGER,
                SCOPE_TYPE_id INTEGER NOT NULL,
                CONSTRAINT role_scope_pkid PRIMARY KEY (id)
);
COMMENT ON TABLE ROLE_SCOPE IS 'The scope of permissions that this assignment provides';
COMMENT ON COLUMN ROLE_SCOPE.id IS 'The Primary key to identify record uniquely';


CREATE UNIQUE INDEX role_scope_idx
 ON ROLE_SCOPE
 ( name );

CREATE TABLE RESOURCE_DOMAIN (
                id INTEGER NOT NULL,
                name VARCHAR(50) NOT NULL,
                description VARCHAR(1024),
                Parent_id INTEGER,
                APPLICATION_id INTEGER,
                RESOURCE_DOMAIN_TYPE_id INTEGER NOT NULL,
                CONSTRAINT resource_domain_pkid PRIMARY KEY (id)
);
COMMENT ON TABLE RESOURCE_DOMAIN IS 'This will be role which can be assigned many permissions.';
COMMENT ON COLUMN RESOURCE_DOMAIN.id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN RESOURCE_DOMAIN.Parent_id IS 'The Primary key to identify record uniquely';


CREATE UNIQUE INDEX resource_domain_idx
 ON RESOURCE_DOMAIN
 ( name );

CREATE TABLE CLIENT_GROUP (
                id INTEGER NOT NULL,
                name VARCHAR(50) NOT NULL,
                description VARCHAR(1024),
                APPLICATION_id INTEGER,
                CONSTRAINT client_group_pkid PRIMARY KEY (id)
);
COMMENT ON TABLE CLIENT_GROUP IS 'A group of clients';
COMMENT ON COLUMN CLIENT_GROUP.id IS 'The Primary key to identify record uniquely';


CREATE UNIQUE INDEX client_group_idx
 ON CLIENT_GROUP
 ( name );

CREATE TABLE CLIENT (
                id INTEGER NOT NULL,
                Description VARCHAR(1024),
                client_identifier VARCHAR(255) NOT NULL,
                APPLICATION_id INTEGER,
                CONSTRAINT client_pkid PRIMARY KEY (id)
);
COMMENT ON COLUMN CLIENT.id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN CLIENT.client_identifier IS 'A unique identifier for a client in the system.';


CREATE UNIQUE INDEX client_idx
 ON CLIENT
 ( client_identifier );

CREATE TABLE CLIENT_GROUP_MEMBERSHIP (
                id INTEGER NOT NULL,
                CLIENT_id INTEGER NOT NULL,
                CLIENT_GROUP_id INTEGER NOT NULL,
                APPLICATION_id INTEGER,
                CONSTRAINT client_group_membership_pkid PRIMARY KEY (id)
);
COMMENT ON TABLE CLIENT_GROUP_MEMBERSHIP IS 'Association table for client groups.';
COMMENT ON COLUMN CLIENT_GROUP_MEMBERSHIP.id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN CLIENT_GROUP_MEMBERSHIP.CLIENT_id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN CLIENT_GROUP_MEMBERSHIP.CLIENT_GROUP_id IS 'The Primary key to identify record uniquely';


CREATE UNIQUE INDEX client_group_membership_idx
 ON CLIENT_GROUP_MEMBERSHIP
 ( CLIENT_id, CLIENT_GROUP_id );

CREATE TABLE CLIENT_ROLE (
                id INTEGER NOT NULL,
                name VARCHAR(50) NOT NULL,
                description VARCHAR(1024),
                APPLICATION_id INTEGER,
                CONSTRAINT client_role_pkid PRIMARY KEY (id)
);
COMMENT ON TABLE CLIENT_ROLE IS 'This will be role which can be assigned many permissions.';
COMMENT ON COLUMN CLIENT_ROLE.id IS 'The Primary key to identify record uniquely';


CREATE UNIQUE INDEX client_role_idx
 ON CLIENT_ROLE
 ( name );

CREATE TABLE CLIENT_GROUP_ROLES (
                id INTEGER NOT NULL,
                CLIENT_GROUP_id INTEGER NOT NULL,
                CLIENT_ROLE_id INTEGER NOT NULL,
                RESOURCE_DOMAIN_id INTEGER,
                ROLE_SCOPE_id INTEGER,
                APPLICATION_id INTEGER,
                CONSTRAINT client_group_roles_pkid PRIMARY KEY (id)
);
COMMENT ON TABLE CLIENT_GROUP_ROLES IS 'The roles assigned to this group.';
COMMENT ON COLUMN CLIENT_GROUP_ROLES.id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN CLIENT_GROUP_ROLES.CLIENT_GROUP_id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN CLIENT_GROUP_ROLES.CLIENT_ROLE_id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN CLIENT_GROUP_ROLES.RESOURCE_DOMAIN_id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN CLIENT_GROUP_ROLES.ROLE_SCOPE_id IS 'The Primary key to identify record uniquely';


CREATE TABLE RESOURCE (
                id INTEGER NOT NULL,
                name VARCHAR(50) NOT NULL,
                description VARCHAR(1024),
                APPLICATION_id INTEGER,
                CONSTRAINT resource_pkid PRIMARY KEY (id)
);
COMMENT ON COLUMN RESOURCE.id IS 'The Primary key to identify record uniquely';


CREATE UNIQUE INDEX resource_idx
 ON RESOURCE
 ( name );

CREATE TABLE ACTION (
                id INTEGER NOT NULL,
                name VARCHAR(50) NOT NULL,
                description VARCHAR(1024),
                APPLICATION_id INTEGER,
                CONSTRAINT action_pkid PRIMARY KEY (id)
);
COMMENT ON COLUMN ACTION.id IS 'The Primary key to identify record uniquely';


CREATE UNIQUE INDEX action_idx
 ON ACTION
 ( name );

CREATE TABLE PERMISSION (
                id INTEGER NOT NULL,
                name VARCHAR(50) NOT NULL,
                ACTION_id INTEGER NOT NULL,
                RESOURCE_id INTEGER NOT NULL,
                Description VARCHAR(1024),
                APPLICATION_id INTEGER,
                CONSTRAINT permission_pkid PRIMARY KEY (id)
);
COMMENT ON COLUMN PERMISSION.id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN PERMISSION.ACTION_id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN PERMISSION.RESOURCE_id IS 'The Primary key to identify record uniquely';


CREATE UNIQUE INDEX permission_idx
 ON PERMISSION
 ( name );

CREATE TABLE CLIENT_ROLE_PERMISSIONS (
                id INTEGER NOT NULL,
                CLIENT_ROLE_id INTEGER NOT NULL,
                PERMISSION_id INTEGER NOT NULL,
                APPLICATION_id INTEGER,
                value VARCHAR(20) NOT NULL,
                CONSTRAINT client_role_permission_pkid PRIMARY KEY (id)
);
COMMENT ON TABLE CLIENT_ROLE_PERMISSIONS IS 'Association table to associate a permission with a role';
COMMENT ON COLUMN CLIENT_ROLE_PERMISSIONS.id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN CLIENT_ROLE_PERMISSIONS.CLIENT_ROLE_id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN CLIENT_ROLE_PERMISSIONS.PERMISSION_id IS 'The Primary key to identify record uniquely';


ALTER TABLE RESOURCE ADD CONSTRAINT application_resource_fk1
FOREIGN KEY (APPLICATION_id)
REFERENCES APPLICATION (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE ACTION ADD CONSTRAINT application_action_fk1
FOREIGN KEY (APPLICATION_id)
REFERENCES APPLICATION (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE PERMISSION ADD CONSTRAINT application_permission_fk1
FOREIGN KEY (APPLICATION_id)
REFERENCES APPLICATION (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE CLIENT_ROLE ADD CONSTRAINT application_client_role_fk1
FOREIGN KEY (APPLICATION_id)
REFERENCES APPLICATION (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE CLIENT ADD CONSTRAINT application_client_fk1
FOREIGN KEY (APPLICATION_id)
REFERENCES APPLICATION (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE CLIENT_ROLE_PERMISSIONS ADD CONSTRAINT application_client_role_permissions_fk1
FOREIGN KEY (APPLICATION_id)
REFERENCES APPLICATION (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE CLIENT_GROUP_MEMBERSHIP ADD CONSTRAINT application_client_group_membership_fk1
FOREIGN KEY (APPLICATION_id)
REFERENCES APPLICATION (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE CLIENT_GROUP ADD CONSTRAINT application_client_group_fk1
FOREIGN KEY (APPLICATION_id)
REFERENCES APPLICATION (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE CLIENT_GROUP_ROLES ADD CONSTRAINT application_client_group_roles_fk1
FOREIGN KEY (APPLICATION_id)
REFERENCES APPLICATION (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE ROLE_SCOPE ADD CONSTRAINT application_role_scope_fk1
FOREIGN KEY (APPLICATION_id)
REFERENCES APPLICATION (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE RESOURCE_DOMAIN ADD CONSTRAINT application_resource_domain_fk1
FOREIGN KEY (APPLICATION_id)
REFERENCES APPLICATION (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE SCOPE_TYPE ADD CONSTRAINT application_scope_type_fk1
FOREIGN KEY (APPLICATION_id)
REFERENCES APPLICATION (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE RESOURCE_DOMAIN_TYPE ADD CONSTRAINT application_resource_domain_type_fk
FOREIGN KEY (APPLICATION_id)
REFERENCES APPLICATION (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE RESOURCE_DOMAIN ADD CONSTRAINT resource_domain_type_resource_domain_fk1
FOREIGN KEY (RESOURCE_DOMAIN_TYPE_id)
REFERENCES RESOURCE_DOMAIN_TYPE (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE ROLE_SCOPE ADD CONSTRAINT scope_type_role_scope_fk1
FOREIGN KEY (SCOPE_TYPE_id)
REFERENCES SCOPE_TYPE (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE CLIENT_GROUP_ROLES ADD CONSTRAINT role_scope_client_group_roles_fk1
FOREIGN KEY (ROLE_SCOPE_id)
REFERENCES ROLE_SCOPE (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE RESOURCE_DOMAIN ADD CONSTRAINT resource_domain_resource_domain_fk
FOREIGN KEY (Parent_id)
REFERENCES RESOURCE_DOMAIN (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE CLIENT_GROUP_ROLES ADD CONSTRAINT resource_domain_client_group_roles_fk1
FOREIGN KEY (RESOURCE_DOMAIN_id)
REFERENCES RESOURCE_DOMAIN (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE CLIENT_GROUP_MEMBERSHIP ADD CONSTRAINT client_group_client_group_membership_fk1
FOREIGN KEY (CLIENT_GROUP_id)
REFERENCES CLIENT_GROUP (id)
ON DELETE RESTRICT
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE CLIENT_GROUP_ROLES ADD CONSTRAINT client_group_client_group_roles_fk1
FOREIGN KEY (CLIENT_GROUP_id)
REFERENCES CLIENT_GROUP (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE CLIENT_GROUP_MEMBERSHIP ADD CONSTRAINT client_client_group_membership_fk1
FOREIGN KEY (CLIENT_id)
REFERENCES CLIENT (id)
ON DELETE RESTRICT
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE CLIENT_ROLE_PERMISSIONS ADD CONSTRAINT client_role_client_role_permissions_fk1
FOREIGN KEY (CLIENT_ROLE_id)
REFERENCES CLIENT_ROLE (id)
ON DELETE RESTRICT
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE CLIENT_GROUP_ROLES ADD CONSTRAINT client_role_client_group_roles_fk1
FOREIGN KEY (CLIENT_ROLE_id)
REFERENCES CLIENT_ROLE (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE PERMISSION ADD CONSTRAINT resource_permission_fk1
FOREIGN KEY (RESOURCE_id)
REFERENCES RESOURCE (id)
ON DELETE RESTRICT
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE PERMISSION ADD CONSTRAINT action_permission_fk1
FOREIGN KEY (ACTION_id)
REFERENCES ACTION (id)
ON DELETE RESTRICT
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE CLIENT_ROLE_PERMISSIONS ADD CONSTRAINT permission_client_role_permissions_fk1
FOREIGN KEY (PERMISSION_id)
REFERENCES PERMISSION (id)
ON DELETE RESTRICT
ON UPDATE NO ACTION
NOT DEFERRABLE;