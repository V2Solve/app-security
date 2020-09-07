#!/bin/bash
set -e

psql --echo-all --set=SUPER_CLIENT_ID="$SUPER_CLIENT_ID" -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL

-- create the super client, owned by the super app created in the initialization SQL
insert into client (id,client_identifier,description,application_id) values (0,:'SUPER_CLIENT_ID','This client is built in super user.',0);

-- create the super group owned by the super app
insert into client_group (id,name,description,application_id) values (0,'SUPER_CLIENTS','This group is a built in starter super client group',0);

-- create the connection between the super user and the super group..
insert into client_group_membership (id,client_id,client_group_id,application_id) values (0,0,0,0);

-- create the super permission -- this also cannot be available and must be owned by super app
insert into permission (id,name,action_id,resource_id,description,application_id) values (0,'SUPER_PERMISSION',0,0,'This permission provides ALL_ACTIONS on ALL_RESOURCES - Its a super permission.',0);

-- create the super role..
insert into client_role (id,name,description,application_id) values (0,'SUPER_ROLE','This is a super role, which should have super permissions.',0);

-- give the super role, the super permission
insert into client_role_permissions (id,client_role_id,permission_id,value,application_id) values (0,0,0,'allow',0);

-- assign the super role to the super clients group..
insert into client_group_roles (id,client_group_id,client_role_id,resource_domain_id,propogate,application_id) values (0,0,0,null,false,0);

EOSQL