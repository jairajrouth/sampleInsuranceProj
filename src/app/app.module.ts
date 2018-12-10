import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './rootApp/app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppMaterialsModule } from './app-materials/app-materials.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginOptionComponent } from './login-option/login-option.component';
import { RootBodyComponent } from './root-body/root-body.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    LoginOptionComponent,
    RootBodyComponent,
    FooterComponent,
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
