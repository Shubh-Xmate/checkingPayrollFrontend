// src/app/auth-config.ts
import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer:"http://localhost:7080/realms/master",
  redirectUri: "http://localhost:4200/dashboard",
  clientId: 'frontend',
  responseType: 'code',
  scope: 'openid profile email',
  showDebugInformation: true,
  requireHttps: false, // Use true in production
  dummyClientSecret : "hQtgXxBHoD9C6QAm93cje2MYonIPouyy"
};
