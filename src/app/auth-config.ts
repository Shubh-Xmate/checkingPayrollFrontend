// src/app/auth-config.ts
import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // issuer: 'http://localhost:8080/auth/realms/test',
  issuer:"http://localhost:7080/realms/master",
  redirectUri: "http://localhost:4200/dashboard",
  clientId: 'test',
  responseType: 'code',
  scope: 'openid profile email',
  showDebugInformation: true,
  requireHttps: false, // Use true in production
  dummyClientSecret : "0DlSPTXEkhgLYRTnRLDa3q8soI2CaWXl"
};
