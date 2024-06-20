const images = require.context(`/public/assets/images`, true);

export const dynamicImage = (image: string | undefined) => {
return images(`./${image}`);
};