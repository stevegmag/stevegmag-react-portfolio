export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

export const getFileUrl = (path) => {
  // For GitHub Pages deployment
  const isProduction = import.meta.env.PROD;
  const baseUrl = isProduction ? '/stevegmag-react-portfolio' : '';
  console.log(`Resolving URL for ${path} in ${isProduction ? 'production' : 'development'}`);
  const finalUrl = `${baseUrl}/assets/${path}`;
  console.log('Final URL:', finalUrl);
  return finalUrl;
};
