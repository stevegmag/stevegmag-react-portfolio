export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

export const getFileUrl = (path) => {
  const isProduction = import.meta.env.PROD;
  // For local development, use absolute path from root
  const baseUrl = isProduction 
    ? '/stevegmag-react-portfolio'
    : '';
  
  console.log(`Environment: ${isProduction ? 'production' : 'development'}`);
  const finalUrl = `${baseUrl}/files/${path}`;
  console.log('Final URL:', finalUrl);
  return finalUrl;
};
