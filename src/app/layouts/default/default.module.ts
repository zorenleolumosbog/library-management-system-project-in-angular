import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/genmodules/home/home.component';
import { AboutComponent } from 'src/app/genmodules/about/about.component';
import { DefaultComponent } from './default.component';
import { RouterModule, Routes } from '@angular/router';
import { GensharedModule } from 'src/app/genshared/genshared.module';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent,
  ],

  imports: [

    CommonModule,
    RouterModule,
    GensharedModule,
  ],

})
export class DefaultModule { }
