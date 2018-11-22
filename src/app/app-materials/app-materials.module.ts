import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatInputModule,
  MatCardModule,
  MatChipsModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
  ],
  exports:[
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
  ]
})
export class AppMaterialsModule { }
