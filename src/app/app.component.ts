// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showDetails: Boolean = true;
  title: String = "payrollfrontend"

  constructor(private oauthService: OAuthService) { }

  ngOnInit() {
    this.configureOAuthService();
  }

  private configureOAuthService() {
    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(localStorage); // Use localStorage
    this.oauthService.setupAutomaticSilentRefresh();

    // Load discovery document and try login
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
      .then((data) => {
        console.log('Load discovery document success', data);
        // Check if already authenticated
        if (this.oauthService.hasValidAccessToken()) {
          console.log('Already authenticated');
          this.storeToken(this.oauthService.getAccessToken());
        } else {
          console.log('Not authenticated');
        }
      })
      .catch(err => console.error('Error loading discovery document', err));
  }

  login() {
    console.log("Initiating login flow...");
    this.oauthService.initLoginFlow();
  }

  logout() {
    console.log("Logging out...");
    this.oauthService.logOut();
    localStorage.removeItem('access_token'); // Remove token from localStorage on logout
    localStorage.removeItem('mobileNumber');
  }

  get token() {
    return localStorage.getItem('access_token'); // Retrieve the token from localStorage
  }
  

  private storeToken(token: string) {
    if(token) {
      localStorage.setItem('access_token', token); // Store the token in localStorage
      const jwtPayload = JSON.parse(atob(token.split('.')[1]));
      const  mobileNumber = jwtPayload.preferred_username;
      localStorage.setItem('mobileNumber', mobileNumber);
      this.showDetails = true;
    }
  }
}
