drop sequence "seq_action_id";
drop sequence "seq_application_id";
drop sequence "seq_client_id";
drop sequence "seq_client_group_id";
drop sequence "seq_client_group_membership_id";
drop sequence "seq_client_group_roles_id";
drop sequence "seq_client_role_id";
drop sequence "seq_client_role_permissions_id";
drop sequence "seq_permission_id";
drop sequence "seq_resource_id";
drop sequence "seq_resource_domain_id";
drop sequence "seq_resource_domain_type_id";
drop sequence "seq_role_scope_id";
drop sequence "seq_scope_type_id";

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

CREATE SEQUENCE "seq_role_scope_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_role_scope_id" OWNER TO postgres;

CREATE SEQUENCE "seq_scope_type_id" INCREMENT 1  START 10000  MINVALUE 1  MAXVALUE 1000000000 CACHE 1;
ALTER SEQUENCE "seq_scope_type_id" OWNER TO postgres;

commit;