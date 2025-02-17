export function getDevice(): string {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) return 'ios';
    if (/android/.test(userAgent)) return 'android';
    return 'desktop';
  }
  
  export function getOperatingSystem(): string {
    const platform = navigator.platform;
    if (platform.includes('Win')) return 'Windows';
    if (platform.includes('Mac')) return 'MacOS';
    if (platform.includes('Linux')) return 'Linux';
    return 'Unknown';
  }