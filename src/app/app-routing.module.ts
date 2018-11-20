import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginOptionComponent } from './login-option/login-option.component';

const routes: Routes = [
  {path: '', component: LoginOptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
