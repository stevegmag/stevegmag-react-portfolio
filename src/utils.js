export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

export const getFileUrl = (path) => {
  // For GitHub Pages deployment
  const isProduction = import.meta.env.PROD;
  const baseUrl = isProduction ? '/stevegmag-react-portfolio' : '';
  return `${baseUrl}/assets/${path}`;
};
