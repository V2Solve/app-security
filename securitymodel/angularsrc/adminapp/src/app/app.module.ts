import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table'
import {MatSortModule} from '@angular/material/sort'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatToolbarModule} from '@angular/material/toolbar';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';

import { ApplicationMgmtComponent } from './application-mgmt/application-mgmt.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { InfoBlockComponent } from './info-block/info-block.component';
import { TableMenuComponent } from './table-menu/table-menu.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { ActionMgmtComponent } from './action-mgmt/action-mgmt.component';
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
import { LoaderInterceptor } from 'src/app/loader-interceptor';
import { ChangeLogMgmtComponent } from './change-log-mgmt/change-log-mgmt.component';
import { DynamicResultsTableComponent } from './dynamic-results-table/dynamic-results-table.component';
import { SideVerticalMenuComponent } from './side-vertical-menu/side-vertical-menu.component';
import { TableMenuVertComponent } from './table-menu-vert/table-menu-vert.component';


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
    PermissionManagementComponent,
    ChangeLogMgmtComponent,
    DynamicResultsTableComponent,
    SideVerticalMenuComponent,
    TableMenuVertComponent
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
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,useClass: LoaderInterceptor, multi: true},
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
