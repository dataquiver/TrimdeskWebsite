export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:7080',
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:4200',
  appName: 'QuiverDesk',
  contactEmail: 'hello@quiverdesk.com',
  // Served from the website's own /downloads folder (UAT: hosted on the Azure VM).
  // Switch back to a GitHub Releases URL for public go-live if preferred.
  apkUrl: process.env.NEXT_PUBLIC_APK_URL || '/downloads/app-release.apk',
};
