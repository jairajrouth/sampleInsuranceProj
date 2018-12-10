import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootBodyComponent } from './root-body/root-body.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: '', component: RootBodyComponent},
  {path: '', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
