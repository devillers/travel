import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: 'davidevillers',
  api_key: '123319878191673',
  api_secret: '-KRUEYrzQILYy5sBrdSkmlWc4g0',
  secure: true,
});

export const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.v2.uploader.upload(file, {
      folder: 'la chandelle',
    });
    return result.secure_url;
  } catch (error) {
    console.error(error);
    return null;
  }
};
