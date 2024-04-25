import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [uploadingStatus, setUploadingStatus] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    setUploadingStatus('Uploading...');

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET);

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );

      const pictureLink = response.data.secure_url;

      // Save the picture link to MongoDB
      const res = await fetch('/api/savePictureLink', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pictureLink }),
      });

      if (res.ok) {
        setUploadingStatus('Upload successful!');
      } else {
        setUploadingStatus('Upload failed. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadingStatus('Upload failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Upload Picture</h1>
      <form className="">
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        />
        <button
          onClick={handleUpload}
          type="button"
          disabled={!file}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-2 rounded"
        >
          upload
        </button>
      </form>

      {uploadingStatus && (
        <p className="relative text-sm text-orange-600 mt-4">
          {uploadingStatus}
        </p>
      )}
    </div>
  );
};

export default Upload;
