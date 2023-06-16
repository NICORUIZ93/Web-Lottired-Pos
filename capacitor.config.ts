import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'web.lottired.pos',
  appName: 'web-lottired-pos',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
