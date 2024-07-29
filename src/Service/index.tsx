// const images = require.context(`/public/assets/images`, true);
// const imagesAssets = require.context(`/src/assets/images`, true);

// export const dynamicImageAssets = (image: string | undefined) => {
//     return imagesAssets(`./${image}`);
// };
export const dynamicImage = (image: string | undefined) => {
    // return images(`./${image}`);
    return image;
};
