import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './rootApp/app.component';
import { AppMaterialsModule } from './app-materials/app-materials.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginOptionComponent } from './login-option/login-option.component';
import { FooterComponent } from './body-component/footer/footer.component';
import { ToolbarComponent } from './body-component/toolbar/toolbar.component';
import { RootBodyComponent } from './body-component/body-section/root-body/root-body.component';
import { RootBody2Component } from './body-component/body-section/root-body2/root-body2.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    LoginOptionComponent,
    RootBodyComponent,
    FooterComponent,
    RootBody2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
