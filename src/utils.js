export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

export const getFileUrl = (path) => {
  const isProduction = import.meta.env.PROD;
  const baseUrl = isProduction ? '/stevegmag-react-portfolio' : '';
  console.log(`Resolving URL for ${path} in ${isProduction ? 'production' : 'development'}`);
  const finalUrl = `${baseUrl}/files/${path}`;
  console.log('Final URL:', finalUrl);
  return finalUrl;
};
