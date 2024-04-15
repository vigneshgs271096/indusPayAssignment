import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';





const homeRoutes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ]
})



export class HomeModule { }
