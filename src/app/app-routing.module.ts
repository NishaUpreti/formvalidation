import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './customcomponent/login/login.component';
import { RegisterComponent } from './customcomponent/register/register.component';
import { ViewdataComponent } from './customcomponent/viewdata/viewdata.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'viewdata', component: ViewdataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponent = [LoginComponent, RegisterComponent];
