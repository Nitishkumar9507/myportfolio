import React, { useState } from 'react';
import backImg from "../assets/backImage.jpg";
import image from "../assets/nitish_photo.jpeg";

const ImageFlip = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`flip-container ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flipper object-cover rounded-full overflow-hidden">
        <div className="front">
          <img src={image} className=' rounded-full h-full w-full' alt="Front Image" />
        </div>
        <div className="back">
          <img src={backImg} className='rounded-full h-full w-full' alt="Back Image" />
        </div>
      </div>
    </div>
  );
}

export default ImageFlip;
