export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

export const getFileUrl = (path) => {
  const isProduction = import.meta.env.PROD;
  const baseUrl = isProduction ? '/stevegmag-react-portfolio' : '';
  // Remove 'assets/' from the path for PDFs
  console.log(`Resolving URL for ${path} in ${isProduction ? 'production' : 'development'}`);
  const finalUrl = `${baseUrl}/${path}`;
  console.log('Final URL:', finalUrl);
  return finalUrl;
};
