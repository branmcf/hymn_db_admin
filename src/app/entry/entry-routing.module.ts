import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserService } from './../services/user.service';
import { AdminService } from './../services/admin.service';

import { EntryComponent } from './entryLogin/entryLogin.component';
import { EntryResourcesComponent, ResourceDialog } from './entryResources/entryResources.component';
import { EntryPersonComponent, PersonDialog } from './entryPerson/entryPerson.component';
import { EntryCongregationComponent , CongDialog } from './entryCongregation/entryCongregation.component';
import { EntryOrgsComponent, OrgsDialog } from './entryOrgs/entryOrgs.component';
import { EntryEventComponent, EventDialog } from './entryEvent/entryEvent.component';
import { EntryLandingComponent } from './entryLanding/entryLanding.component';
import { EntryRegisterComponent } from './entryRegister/entryRegister.component';

const routes: Routes = [
    { path: '', component: EntryComponent },
    { path: 'welcome', component: EntryLandingComponent, canActivate: [UserService] },
    { path: 'resources', component: EntryResourcesComponent, canActivate: [UserService] },
    { path: 'resources', component: ResourceDialog},
    { path: 'person', component: EntryPersonComponent, canActivate: [UserService] },
    { path: 'person', component: PersonDialog},
    { path: 'congregations', component: EntryCongregationComponent, canActivate: [UserService] },
    { path: 'congregations', component: CongDialog},
    { path: 'orgs', component: EntryOrgsComponent, canActivate: [UserService] },
    { path: 'orgs', component: OrgsDialog},
    { path: 'events', component: EntryEventComponent, canActivate: [UserService] },
    { path: 'events', component: EventDialog},
    { path: 'register', component: EntryRegisterComponent, canActivate: [AdminService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EntryRoutingModule { }
