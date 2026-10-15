export const getPublicMediaUrl = (path: string): string => {
  const baseUrl = new URL(import.meta.env.BASE_URL, document.baseURI);
  const encodedPath = path.split('/').map(encodeURIComponent).join('/');
  return new URL(encodedPath, baseUrl).href;
};
