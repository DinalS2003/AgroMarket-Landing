export const APK_DOWNLOAD_URL = '/downloads/AgroMarket.apk';
export const APK_FILE_NAME = 'AgroMarket.apk';

/**
 * Triggers the browser download of the AgroMarket Android APK.
 */
export function handleDirectApkDownload(e?: React.MouseEvent) {
  if (e) {
    // We allow standard link navigation but also ensure programmatically
  }
  const link = document.createElement('a');
  link.href = APK_DOWNLOAD_URL;
  link.download = APK_FILE_NAME;
  link.target = '_self';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
