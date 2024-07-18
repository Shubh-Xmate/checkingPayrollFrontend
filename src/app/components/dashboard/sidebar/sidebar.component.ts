import { HttpHeaders } from '@angular/common/http';
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
    roles: string[] = [];

    private access_token = localStorage.getItem('access_token');
    
    ngOnInit(): void {
      this.processAccessToken();
    }
  
    private processAccessToken(): void {
      const access_token = localStorage.getItem('access_token');
      if (access_token) {
        try {
          const jwtPayload = JSON.parse(atob(access_token.split('.')[1]));
          this.roles = jwtPayload.realm_access.roles;
          console.log('User roles:', this.roles);

        } catch (error) {
          console.error('Error decoding JWT token:', error);
        }
      } else {
        console.warn('No access token available');
      }
    }
    isAdmin(): boolean {
      console.log("admin toh hai");
      return this.roles.includes('admin');
    }
  
    isEmployee(): boolean {
      return this.roles.includes('employee');
    }

    logout(){
      this.oauthService.logOut();
      localStorage.removeItem('access_token');
    }
}