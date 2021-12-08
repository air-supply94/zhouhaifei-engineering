export function webVitals(callback: (...arg: any[]) => any): void {
  import('web-vitals').then(({ getCLS, getFCP, getFID, getLCP, getTTFB }) => {
    getCLS(callback);
    getFCP(callback);
    getFID(callback);
    getLCP(callback);
    getTTFB(callback);
  });
}
