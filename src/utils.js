export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

export const getFileUrl = (path) => {
  const isProduction = import.meta.env.PROD;
  // Remove the repository prefix since we're using a custom domain
  const baseUrl = '';
  
  console.log(`Environment: ${isProduction ? 'production' : 'development'}`);
  const finalUrl = `${baseUrl}/files/${path}`;
  console.log('Final URL:', finalUrl);
  return finalUrl;
};
