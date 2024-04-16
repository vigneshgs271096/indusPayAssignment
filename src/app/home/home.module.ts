import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProvidedComponent } from './service-provided/service-provided.component';





const homeRoutes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
    ServiceProvidedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ]
})



export class HomeModule { }
