import React, { useState, useRef } from 'react';

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    // Handle image upload logic here
    if (selectedImage) {
      console.log('Uploading image:', selectedImage);
      // Perform your upload logic, like sending the image to a server
    } else {
      console.log('No image selected.');
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleImageChange}
      />
      <button onClick={() => inputRef.current.click()}>Select Image</button>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default ImageUpload;