import React from "react";
import "./Banner.scss";

function ImageBanner({ imageSrc, altText, textOverlay }) {
  return (
    <div className="banner">
      <div className="image-container">
        <img src={imageSrc} alt={altText} />
        {textOverlay && <div className="text-overlay">{textOverlay}</div>}
      </div>
    </div>
  );
}

export default ImageBanner;

