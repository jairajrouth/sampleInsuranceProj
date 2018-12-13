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
  MatFormFieldModule,
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
    MatFormFieldModule,
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
    MatFormFieldModule,
  ]
})
export class AppMaterialsModule { }
