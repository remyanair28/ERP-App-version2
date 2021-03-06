import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';

import { HomeComponent } from './home/home.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

import { AddemployeeComponent } from './employees/addemployee/addemployee.component';
import { EmployeeslistComponent } from './employees/employeeslist/employeeslist.component';
import { EmployeedetailsComponent } from './employees/employeedetails/employeedetails.component';
import { EditemployeeComponent } from './employees/editemployee/editemployee.component';
import { UserslistComponent } from './users/userslist/userslist.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { EdituserComponent } from './users/edituser/edituser.component';
import { RegisterComponent } from './authentication/register/register.component';
import { EventslistComponent } from './events/eventslist/eventslist.component';
import { AddeventComponent } from './events/addevent/addevent.component';
import { EditeventComponent } from './events/editevent/editevent.component';
import { EventdetailsComponent } from './events/eventdetails/eventdetails.component';
import { LoginGaurdGuard } from './route-gaurd/login-gaurd.guard';
import { RolesGuard } from './route-gaurd/roles.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent,
      children: [
        {path: 'addemployee', component: AddemployeeComponent,canActivate:[LoginGaurdGuard,RolesGuard] },
        {path: 'employeelist', component: EmployeeslistComponent,canActivate:[LoginGaurdGuard,RolesGuard] },
        { path: 'employeelist/:id', component: EmployeedetailsComponent,canActivate:[LoginGaurdGuard,RolesGuard] },
        { path: 'editemployee/:id', component: EditemployeeComponent,canActivate:[LoginGaurdGuard,RolesGuard] },
        { path: 'userlist', component: UserslistComponent,canActivate:[LoginGaurdGuard,RolesGuard] },
        { path: 'adduser', component: AdduserComponent ,canActivate:[LoginGaurdGuard,RolesGuard] },
        { path: 'edituser/:id', component: EdituserComponent,canActivate:[LoginGaurdGuard,RolesGuard] },
        { path: 'eventslist', component: EventslistComponent,canActivate:[LoginGaurdGuard] },
        { path: 'addevent', component: AddeventComponent,canActivate:[LoginGaurdGuard] },
        { path: 'editevent/:id', component: EditeventComponent,canActivate:[LoginGaurdGuard] },
        { path: 'eventslist/:id', component: EventdetailsComponent,canActivate:[LoginGaurdGuard] }
      ]
  },
  {path: '404', component: PagenotfoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,
                                  RegisterComponent,
                                  HomeComponent,
                                  EmployeeslistComponent,
                                  EditemployeeComponent,
                                  EmployeedetailsComponent,
                                  EmployeedetailsComponent,
                                  AddemployeeComponent,
                                  UserslistComponent,
                                  AdduserComponent,
                                  EdituserComponent,
                                  EventslistComponent,
                                  AddeventComponent,
                                  EditeventComponent,
                                  EventdetailsComponent,
                                  PagenotfoundComponent
]
