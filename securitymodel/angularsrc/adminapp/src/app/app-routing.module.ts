import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionMgmtComponent } from './action-mgmt/action-mgmt.component';
import { ApplicationMgmtComponent } from './application-mgmt/application-mgmt.component';
import { ResourceManagementComponent } from './resource-management/resource-management.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ScopeTypeManagementComponent } from './scope-type-management/scope-type-management.component';
import { ScopeManagementComponent } from './scope-management/scope-management.component';
import { DomainManagementComponent } from './domain-management/domain-management.component';
import { DomainTypeManagementComponent } from './domain-type-management/domain-type-management.component';
import { ClientGroupManagementComponent } from './client-group-management/client-group-management.component';
import { ClientToGroupsComponent } from './client-to-groups/client-to-groups.component';
import { RoleToPermissionsComponent } from './role-to-permissions/role-to-permissions.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { PermissionManagementComponent } from './permission-management/permission-management.component';
import { GroupsToRolesComponent } from './groups-to-roles/groups-to-roles.component';

const routes: Routes = 
[
  { path: 'actionManagement', component: ActionMgmtComponent },
  { path: 'appManagement', component: ApplicationMgmtComponent},
  { path: 'resourceManagement', component: ResourceManagementComponent},
  { path: 'clientManagement', component: ClientManagementComponent},
  { path: 'scopetypeManagement', component: ScopeTypeManagementComponent},
  { path: 'scopeManagement', component: ScopeManagementComponent},
  { path: 'domainManagement', component: DomainManagementComponent},
  { path: 'domaintypeManagement', component: DomainTypeManagementComponent},
  { path: 'clientGroupManagement', component: ClientGroupManagementComponent},
  { path: 'clientToGroups', component: ClientToGroupsComponent},
  { path: 'roleToPermissions', component: RoleToPermissionsComponent},
  { path: 'clientRoleManagement', component: RoleManagementComponent},
  { path: 'scopetypeManagement', component: ScopeTypeManagementComponent},
  { path: 'permissionManagement', component: PermissionManagementComponent},
  { path: 'groupRoleManagement', component: GroupsToRolesComponent},
  { path: 'rolePermissionManagement', component: RoleToPermissionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
