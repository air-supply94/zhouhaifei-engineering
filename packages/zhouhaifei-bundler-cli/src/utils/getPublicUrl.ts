export function getPublicUrl(publicPath: string): string {
  return publicPath || process.env.PUBLIC_URL || '/';
}
