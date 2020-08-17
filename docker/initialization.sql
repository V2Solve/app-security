CREATE TABLE CHANGE_LOG (
                id INTEGER NOT NULL,
                action VARCHAR(50) NOT NULL,
                resource VARCHAR(50) NOT NULL,
                record_identifier VARCHAR(100) NOT NULL,
                datetime TIMESTAMP NOT NULL,
                original_record VARCHAR(2048),
                changed_record VARCHAR(2048),
                changer_id VARCHAR(255) NOT NULL,
                target_id VARCHAR(255),
                change_title VARCHAR(255) NOT NULL,
                CONSTRAINT change_log_id PRIMARY KEY (id)
);


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

CREATE TABLE BASIC_AUTH_CLIENTS (
                id INTEGER NOT NULL,
                name VARCHAR(50) NOT NULL,
                user_password VARCHAR(1024) NOT NULL,
                enabled BOOLEAN NOT NULL,
                APPLICATION_id INTEGER,
                CONSTRAINT basic_auth_clients_pk PRIMARY KEY (id)
);


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
                APPLICATION_id INTEGER,
                propogate BOOLEAN NOT NULL,
                CONSTRAINT client_group_roles_pkid PRIMARY KEY (id)
);
COMMENT ON TABLE CLIENT_GROUP_ROLES IS 'The roles assigned to this group.';
COMMENT ON COLUMN CLIENT_GROUP_ROLES.id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN CLIENT_GROUP_ROLES.CLIENT_GROUP_id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN CLIENT_GROUP_ROLES.CLIENT_ROLE_id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN CLIENT_GROUP_ROLES.RESOURCE_DOMAIN_id IS 'The Primary key to identify record uniquely';


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
                ROLE_SCOPE_id INTEGER,
                CONSTRAINT client_role_permission_pkid PRIMARY KEY (id)
);
COMMENT ON TABLE CLIENT_ROLE_PERMISSIONS IS 'Association table to associate a permission with a role';
COMMENT ON COLUMN CLIENT_ROLE_PERMISSIONS.id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN CLIENT_ROLE_PERMISSIONS.CLIENT_ROLE_id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN CLIENT_ROLE_PERMISSIONS.PERMISSION_id IS 'The Primary key to identify record uniquely';
COMMENT ON COLUMN CLIENT_ROLE_PERMISSIONS.ROLE_SCOPE_id IS 'The Primary key to identify record uniquely';


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

ALTER TABLE BASIC_AUTH_CLIENTS ADD CONSTRAINT application_basic_auth_clients_fk1
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

ALTER TABLE CLIENT_ROLE_PERMISSIONS ADD CONSTRAINT role_scope_client_role_permissions_fk1
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

-- SQL Sequences start here..
CREATE SEQUENCE "seq_action_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_action_id" OWNER TO postgres;

CREATE SEQUENCE "seq_application_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_application_id" OWNER TO postgres;

CREATE SEQUENCE "seq_client_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_client_id" OWNER TO postgres;

CREATE SEQUENCE "seq_client_group_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_client_group_id" OWNER TO postgres;

CREATE SEQUENCE "seq_client_group_membership_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_client_group_membership_id" OWNER TO postgres;

CREATE SEQUENCE "seq_client_group_roles_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_client_group_roles_id" OWNER TO postgres;

CREATE SEQUENCE "seq_client_role_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_client_role_id" OWNER TO postgres;

CREATE SEQUENCE "seq_client_role_permissions_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_client_role_permissions_id" OWNER TO postgres;

CREATE SEQUENCE "seq_permission_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_permission_id" OWNER TO postgres;

CREATE SEQUENCE "seq_resource_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_resource_id" OWNER TO postgres;

CREATE SEQUENCE "seq_resource_domain_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_resource_domain_id" OWNER TO postgres;

CREATE SEQUENCE "seq_resource_domain_type_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_resource_domain_type_id" OWNER TO postgres;

CREATE SEQUENCE "seq_change_log_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_change_log_id" OWNER TO postgres;

CREATE SEQUENCE "seq_role_scope_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_role_scope_id" OWNER TO postgres;

CREATE SEQUENCE "seq_scope_type_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_scope_type_id" OWNER TO postgres;

CREATE SEQUENCE "seq_basic_auth_clients_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_basic_auth_clients_id" OWNER TO postgres;

-- NOW INITIALIZING THE DATABASE with some initial Data. (Note the initial super user is created in the init-user-db.sh)


-- Some basic actions that are part of the basic admin application
insert into action (id,name,description,application_id) values (2,'CREATE','The super action that stands for all actions',null);
insert into action (id,name,description,application_id) values (3,'READ','should impart ability to read or view some resource',null);
insert into action (id,name,description,application_id) values (4,'UPDATE','should impart the ability to update some resource',null);
insert into action (id,name,description,application_id) values (5,'DELETE','should impart the ability to delete some resource',null);
insert into action (id,name,description,application_id) values (6,'ASSUME','should impart the ability to assume some something',null);

-- Some basic resources that are a part of the basic admin application
insert into resource (id,name,description,application_id) values (2,'ACTION','represents an action or verb',null);
insert into resource (id,name,description,application_id) values (3,'APPLICATION','represents an application resource',null);
insert into resource (id,name,description,application_id) values (4,'CLIENT','represents a client resource',null);
insert into resource (id,name,description,application_id) values (5,'CLIENT_GROUP','represents a client group',null);
insert into resource (id,name,description,application_id) values (6,'CLIENT_GROUP_MEMBERSHIP','represents an association of a client with a group',null);
insert into resource (id,name,description,application_id) values (7,'CLIENT_ROLE','represents a role',null);
insert into resource (id,name,description,application_id) values (8,'GROUP_ROLE_MEMBERSHIP','represents an association of group with a role',null);
insert into resource (id,name,description,application_id) values (9,'PERMISSION','represents an permission resource',null);
insert into resource (id,name,description,application_id) values (10,'PERMISSION_ROLE_MEMBERSHIP','represents an association of a permission with a role',null);
insert into resource (id,name,description,application_id) values (11,'RESOURCE','represents a resource',null);
insert into resource (id,name,description,application_id) values (12,'RESOURCE_DOMAIN','represents an hierarchical value',null);
insert into resource (id,name,description,application_id) values (13,'RESOURCE_DOMAIN_TYPE','represents an hierarchical value type',null);
insert into resource (id,name,description,application_id) values (14,'SCOPE_TYPE','represents a type of scope',null);
insert into resource (id,name,description,application_id) values (15,'ROLE_SCOPE','represents a scope of a particular type with values',null);
insert into resource (id,name,description,application_id) values (16,'CHANGE_LOG','represents an entry in the change_log',null);
insert into resource (id,name,description,application_id) values (17,'BASIC_AUTH_CLIENT','represents basic auth client',null);

-- some default scope information.
-- insert into scope_type (id,name,application_id) values (1,'VALUES',null);

-- some standard scope
-- insert into role_scope (id,name,description,scope_value,application_id,scope_type_id) values (1,'OWNER_SCOPE','Represents a scope representing items owned by the user','OWN',null,1);
-- insert into role_scope (id,name,description,scope_value,application_id,scope_type_id) values (2,'ALL_SCOPE','Represents a scope representing all items','ALL',null,1);
-- insert into role_scope (id,name,description,scope_value,application_id,scope_type_id) values (3,'DOMAIN_SCOPE','Represents a scope representing all items at assigned domains','DOMAIN',null,1);


-- Some basic permissions on the resources of the administration application.
insert into permission (id,name,action_id,resource_id,description,application_id) values (5,'ALL_ACTIONS ON ACTION',1,2,'ALLOWS ALL_ACTIONS ON ACTION',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (10,'CREATE ON ACTION',2,2,'ALLOWS CREATE PERMISSION ON ACTION',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (20,'READ ON ACTION',3,2,'ALLOWS READ PERMISSION ON ACTION',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (30,'UPDATE ON ACTION',4,2,'ALLOWS UPDATE PERMISSION ON ACTION',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (40,'DELETE ON ACTION',5,2,'ALLOWS DELETE PERMISSION ON ACTION',null);

insert into permission (id,name,action_id,resource_id,description,application_id) values (45,'ALL_ACTIONS ON APPLICATION',1,3,'ALLOWS ALL_ACTIONS ON APPLICATION',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (50,'CREATE ON APPLICATION',2,3,'ALLOWS CREATE PERMISSION ON APPLICATION',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (60,'READ ON APPLICATION',3,3,'ALLOWS READ PERMISSION ON APPLICATION',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (70,'UPDATE ON APPLICATION',4,3,'ALLOWS UPDATE PERMISSION ON APPLICATION',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (80,'DELETE ON APPLICATION',5,3,'ALLOWS DELETE PERMISSION ON APPLICATION',null);

insert into permission (id,name,action_id,resource_id,description,application_id) values (85,'ALL_ACTIONS ON CLIENT',1,4,'ALLOWS ALL_ACTIONS PERMISSION ON CLIENT',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (90,'CREATE ON CLIENT',2,4,'ALLOWS CREATE PERMISSION ON CLIENT',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (100,'READ ON CLIENT',3,4,'ALLOWS READ PERMISSION ON CLIENT',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (110,'UPDATE ON CLIENT',4,4,'ALLOWS UPDATE PERMISSION ON CLIENT',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (120,'DELETE ON CLIENT',5,4,'ALLOWS DELETE PERMISSION ON CLIENT',null);


insert into permission (id,name,action_id,resource_id,description,application_id) values (125,'ALL_ACTIONS ON CLIENT_GROUP',1,5,'ALLOWS ALL_ACTIONS PERMISSION ON CLIENT_GROUP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (130,'CREATE ON CLIENT_GROUP',2,5,'ALLOWS CREATE PERMISSION ON CLIENT_GROUP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (140,'READ ON CLIENT_GROUP',3,5,'ALLOWS READ PERMISSION ON CLIENT_GROUP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (150,'UPDATE ON CLIENT_GROUP',4,5,'ALLOWS UPDATE PERMISSION ON CLIENT_GROUP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (160,'DELETE ON CLIENT_GROUP',5,5,'ALLOWS DELETE PERMISSION ON CLIENT_GROUP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (161,'ASSUME ON CLIENT_GROUP',6,5,'ALLOWS ASSUME ON CLIENT_GROUP',null);


insert into permission (id,name,action_id,resource_id,description,application_id) values (165,'ALL_ACTIONS ON CLIENT_GROUP_MEMBERSHIP',1,6,'ALLOWS ALL_ACTIONS PERMISSION ON CLIENT_GROUP_MEMBERSHIP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (170,'CREATE ON CLIENT_GROUP_MEMBERSHIP',2,6,'ALLOWS CREATE PERMISSION ON CLIENT_GROUP_MEMBERSHIP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (180,'READ ON CLIENT_GROUP_MEMBERSHIP',3,6,'ALLOWS READ PERMISSION ON CLIENT_GROUP_MEMBERSHIP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (190,'UPDATE ON CLIENT_GROUP_MEMBERSHIP',4,6,'ALLOWS UPDATE PERMISSION ON CLIENT_GROUP_MEMBERSHIP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (200,'DELETE ON CLIENT_GROUP_MEMBERSHIP',5,6,'ALLOWS DELETE PERMISSION ON CLIENT_GROUP_MEMBERSHIP',null);


insert into permission (id,name,action_id,resource_id,description,application_id) values (205,'ALL_ACTIONS ON ROLE',1,7,'ALLOWS ALL_ACTIONS PERMISSION ON ROLE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (210,'CREATE ON ROLE',2,7,'ALLOWS CREATE PERMISSION ON ROLE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (220,'READ ON ROLE',3,7,'ALLOWS READ PERMISSION ON ROLE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (230,'UPDATE ON ROLE',4,7,'ALLOWS UPDATE PERMISSION ON ROLE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (240,'DELETE ON ROLE',5,7,'ALLOWS DELETE PERMISSION ON ROLE',null);

insert into permission (id,name,action_id,resource_id,description,application_id) values (245,'ALL_ACTIONS ON GROUP_ROLE_MEMBERSHIP',1,8,'ALLOWS ALL_ACTIONS PERMISSION ON GROUP_ROLE_MEMBERSHIP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (250,'CREATE ON GROUP_ROLE_MEMBERSHIP',2,8,'ALLOWS CREATE PERMISSION ON GROUP_ROLE_MEMBERSHIP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (260,'READ ON GROUP_ROLE_MEMBERSHIP',3,8,'ALLOWS READ PERMISSION ON GROUP_ROLE_MEMBERSHIP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (270,'UPDATE ON GROUP_ROLE_MEMBERSHIP',4,8,'ALLOWS UPDATE PERMISSION ON GROUP_ROLE_MEMBERSHIP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (280,'DELETE ON GROUP_ROLE_MEMBERSHIP',5,8,'ALLOWS DELETE PERMISSION ON GROUP_ROLE_MEMBERSHIP',null);

insert into permission (id,name,action_id,resource_id,description,application_id) values (285,'ALL_ACTIONS ON PERMISSION',1,9,'ALLOWS ALL_ACTIONS PERMISSION ON PERMISSION',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (290,'CREATE ON PERMISSION',2,9,'ALLOWS CREATE PERMISSION ON PERMISSION',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (300,'READ ON PERMISSION',3,9,'ALLOWS READ PERMISSION ON PERMISSION',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (310,'UPDATE ON PERMISSION',4,9,'ALLOWS UPDATE PERMISSION ON PERMISSION',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (320,'DELETE ON PERMISSION',5,9,'ALLOWS DELETE PERMISSION ON PERMISSION',null);


insert into permission (id,name,action_id,resource_id,description,application_id) values (325,'ALL_ACTIONS ON PERMISSION_ROLE_MEMBERSHIP',1,10,'ALLOWS ALL_ACTIONS PERMISSION ON PERMISSION_ROLE_MEMBERSHIP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (330,'CREATE ON PERMISSION_ROLE_MEMBERSHIP',2,10,'ALLOWS CREATE PERMISSION ON PERMISSION_ROLE_MEMBERSHIP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (340,'READ ON PERMISSION_ROLE_MEMBERSHIP',3,10,'ALLOWS READ PERMISSION ON PERMISSION_ROLE_MEMBERSHIP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (350,'UPDATE ON PERMISSION_ROLE_MEMBERSHIP',4,10,'ALLOWS UPDATE PERMISSION ON PERMISSION_ROLE_MEMBERSHIP',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (360,'DELETE ON PERMISSION_ROLE_MEMBERSHIP',5,10,'ALLOWS DELETE PERMISSION ON PERMISSION_ROLE_MEMBERSHIP',null);


insert into permission (id,name,action_id,resource_id,description,application_id) values (365,'ALL_ACTIONS ON RESOURCE',1,11,'ALLOWS ALL_ACTIONS PERMISSION ON RESOURCE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (370,'CREATE ON RESOURCE',2,11,'ALLOWS CREATE PERMISSION ON RESOURCE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (380,'READ ON RESOURCE',3,11,'ALLOWS READ PERMISSION ON RESOURCE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (390,'UPDATE ON RESOURCE',4,11,'ALLOWS UPDATE PERMISSION ON RESOURCE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (400,'DELETE ON RESOURCE',5,11,'ALLOWS DELETE PERMISSION ON RESOURCE',null);


insert into permission (id,name,action_id,resource_id,description,application_id) values (405,'ALL_ACTIONS ON DOMAIN',1,12,'ALLOWS ALL_ACTIONS PERMISSION ON DOMAIN',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (410,'CREATE ON DOMAIN',2,12,'ALLOWS CREATE PERMISSION ON DOMAIN',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (420,'READ ON DOMAIN',3,12,'ALLOWS READ PERMISSION ON DOMAIN',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (430,'UPDATE ON DOMAIN',4,12,'ALLOWS UPDATE PERMISSION ON DOMAIN',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (440,'DELETE ON DOMAIN',5,12,'ALLOWS DELETE PERMISSION ON DOMAIN',null);


insert into permission (id,name,action_id,resource_id,description,application_id) values (445,'ALL_ACTIONS ON DOMAIN_TYPE',1,13,'ALLOWS ALL_ACTIONS PERMISSION ON DOMAIN_TYPE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (450,'CREATE ON DOMAIN_TYPE',2,13,'ALLOWS CREATE PERMISSION ON DOMAIN_TYPE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (460,'READ ON DOMAIN_TYPE',3,13,'ALLOWS READ PERMISSION ON DOMAIN_TYPE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (470,'UPDATE ON DOMAIN_TYPE',4,13,'ALLOWS UPDATE PERMISSION ON DOMAIN_TYPE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (480,'DELETE ON DOMAIN_TYPE',5,13,'ALLOWS DELETE PERMISSION ON DOMAIN_TYPE',null);


insert into permission (id,name,action_id,resource_id,description,application_id) values (485,'ALL_ACTIONS ON SCOPE_TYPE',1,14,'ALLOWS ALL_ACTIONS PERMISSION ON SCOPE_TYPE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (490,'CREATE ON SCOPE_TYPE',2,14,'ALLOWS CREATE PERMISSION ON SCOPE_TYPE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (500,'READ ON SCOPE_TYPE',3,14,'ALLOWS READ PERMISSION ON SCOPE_TYPE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (510,'UPDATE ON SCOPE_TYPE',4,14,'ALLOWS UPDATE PERMISSION ON SCOPE_TYPE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (520,'DELETE ON SCOPE_TYPE',5,14,'ALLOWS DELETE PERMISSION ON SCOPE_TYPE',null);

insert into permission (id,name,action_id,resource_id,description,application_id) values (525,'ALL_ACTIONS ON SCOPE',1,15,'ALLOWS ALL_ACTIONS PERMISSION ON SCOPE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (530,'CREATE ON SCOPE',2,15,'ALLOWS CREATE PERMISSION ON SCOPE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (540,'READ ON SCOPE',3,15,'ALLOWS READ PERMISSION ON SCOPE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (550,'UPDATE ON SCOPE',4,15,'ALLOWS UPDATE PERMISSION ON SCOPE',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (560,'DELETE ON SCOPE',5,15,'ALLOWS DELETE PERMISSION ON SCOPE',null);

insert into permission (id,name,action_id,resource_id,description,application_id) values (565,'ALL_ACTIONS ON CHANGE_LOG',1,16,'ALLOWS ALL_ACTIONS PERMISSION ON CHANGE_LOG',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (570,'READ ON CHANGE_LOG',3,16,'ALLOWS READ PERMISSION ON CHANGE_LOG',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (580,'DELETE ON CHANGE_LOG',5,16,'ALLOWS DELETE PERMISSION ON CHANGE_LOG',null);

-- Some special permissions.. A universal CRUD permission.
insert into permission (id,name,action_id,resource_id,description,application_id) values (610,'CREATE ON ALL_RESOURCES',2,1,'ALLOWS CREATE PERMISSION ON ALL RESOURCES',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (620,'READ ON ALL_RESOURCES',3,1,'ALLOWS READ PERMISSION ON ALL RESOURCES',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (630,'UPDATE ON ALL_RESOURCES',4,1,'ALLOWS UPDATE PERMISSION ON ALL RESOURCES',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (640,'DELETE ON ALL_RESOURCES',5,1,'ALLOWS DELETE PERMISSION ON ALL RESOURCES',null);

-- Permissions for Basic Auth Client table.
insert into permission (id,name,action_id,resource_id,description,application_id) values (650,'ALL_ACTIONS ON BASIC_AUTH_CLIENT',1,17,'ALLOWS ALL_ACTIONS PERMISSION ON BASIC_AUTH_CLIENT',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (660,'CREATE ON BASIC_AUTH_CLIENT',2,17,'ALLOWS CREATE PERMISSION ON BASIC_AUTH_CLIENT',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (670,'READ ON BASIC_AUTH_CLIENT',3,17,'ALLOWS READ PERMISSION ON BASIC_AUTH_CLIENT',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (680,'UPDATE ON BASIC_AUTH_CLIENT',4,17,'ALLOWS UPDATE PERMISSION ON BASIC_AUTH_CLIENT',null);
insert into permission (id,name,action_id,resource_id,description,application_id) values (690,'DELETE ON BASIC_AUTH_CLIENT',5,17,'ALLOWS DELETE PERMISSION ON BASIC_AUTH_CLIENT',null);
