import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { ActionMgmtComponent } from './action-mgmt/action-mgmt.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplicationMgmtComponent } from './application-mgmt/application-mgmt.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { InfoBlockComponent } from './info-block/info-block.component';
import { TableMenuComponent } from './table-menu/table-menu.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table'
import {MatSortModule} from '@angular/material/sort'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ResourceManagementComponent } from './resource-management/resource-management.component';
import { ScopeTypeManagementComponent } from './scope-type-management/scope-type-management.component';
import { ClientGroupManagementComponent } from './client-group-management/client-group-management.component';
import { DomainTypeManagementComponent } from './domain-type-management/domain-type-management.component';
import { ScopeManagementComponent } from './scope-management/scope-management.component';
import { DomainManagementComponent } from './domain-management/domain-management.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { RoleToPermissionsComponent } from './role-to-permissions/role-to-permissions.component';
import { ClientToGroupsComponent } from './client-to-groups/client-to-groups.component';
import { GroupsToRolesComponent } from './groups-to-roles/groups-to-roles.component';
import { PermissionManagementComponent } from './permission-management/permission-management.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BottombarComponent,
    ActionMgmtComponent,
    ApplicationMgmtComponent,
    ResultsTableComponent,
    InfoBlockComponent,
    TableMenuComponent,
    SpinnerComponent,
    ClientManagementComponent,
    ResourceManagementComponent,
    ScopeTypeManagementComponent,
    ClientGroupManagementComponent,
    DomainTypeManagementComponent,
    ScopeManagementComponent,
    DomainManagementComponent,
    RoleManagementComponent,
    RoleToPermissionsComponent,
    ClientToGroupsComponent,
    GroupsToRolesComponent,
    PermissionManagementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
