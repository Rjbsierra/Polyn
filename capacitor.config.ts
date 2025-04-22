import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.polyn.app',
  appName: 'polyn',
  webDir: 'dist/polyn/browser',
  server: {url:'http://192.168.100.11:4200',
    cleartext : true,
  }

};

export default config;
