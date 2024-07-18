import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    constructor(private oauthService : OAuthService){}

    logout(){
      this.oauthService.logOut();
      localStorage.removeItem('access_token');
    }
}