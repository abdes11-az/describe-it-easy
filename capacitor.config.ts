import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.c5ee0961b38d4db687a07aaf5fae436a',
  appName: 'describe-it-easy',
  webDir: 'dist',
  server: {
    url: 'https://c5ee0961-b38d-4db6-87a0-7aaf5fae436a.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ffffff',
      showSpinner: false
    }
  }
};

export default config;