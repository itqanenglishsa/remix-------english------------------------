export const getPublicMediaUrl = (path: string): string => {
  const baseUrl = new URL(import.meta.env.BASE_URL, window.location.href);
  const encodedPath = path.split('/').map(encodeURIComponent).join('/');
  return new URL(encodedPath, baseUrl).href;
};
