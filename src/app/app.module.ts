// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainContentComponent } from './components/dashboard/main-content/main-content.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    MainContentComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    CommonModule,
    OAuthModule.forRoot({
      resourceServer :{
        sendAccessToken : true,
        allowedUrls: ["*"]
      }
    }) // Initialize OAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
