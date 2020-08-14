#!/bin/bash
set -e

psql --set=SUPER_CLIENT_ID="$SUPER_CLIENT_ID" -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
-- create the first application..
insert into application (id,app_identifier,app_short_identifier,description) values (0,'SUPER_APP','SUPER_APP','This is the app that holds the initial super user.');

insert into client (id,client_identifier,description,application_id) values (0,:'SUPER_CLIENT_ID','This client is built in super user.',0);

-- create the super group
insert into client_group (id,name,description,application_id) values (0,'SUPER_CLIENTS','This group is a built in starter super client group',0);


-- create the connection between the super user and the super group..
insert into client_group_membership (id,client_id,client_group_id,application_id) values (1,1,1,0);

-- create the super action - the super action is useful so we will keep application as null, meaning available to others.
insert into action (id,name,description,application_id) values (0,'ALL_ACTIONS','The super action that stands for all actions',null);

-- create the super resource - super resource cannot be available globally..
insert into resource (id,name,description,application_id) values (0,'ALL_RESOURCES','The super resource keyword that stands for all resources',0);

-- create the super permission -- this also cannot be available
insert into permission (id,name,action_id,resource_id,description,application_id) values (0,'SUPER_PERMISSION',1,1,'This permission provides ALL_ACTIONS on ALL_RESOURCES - Its a super permission.',0);


-- create the super role..
insert into client_role (id,name,description,application_id) values (0,'SUPER_ROLE','This is a super role, which should have super permissions.',0);


-- give the super role, the super permission
insert into client_role_permissions (id,client_role_id,permission_id,value,application_id) values (0,1,1,'allow',0);


-- assign the super role to the super clients group..
insert into client_group_roles (id,client_group_id,client_role_id,resource_domain_id,role_scope_id,application_id) values (0,1,1,null,null,0);
EOSQL