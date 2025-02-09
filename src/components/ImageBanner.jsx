import React, { useState } from "react";
import "./ImageBanner.scss";

export default function ImageBanner({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0);

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    setCurrentPicture((currentPicture - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="image__banner">
      <div className="image__container">
        {pictures && pictures.length > 0 ? (
          pictures.map((pic, i) => (
            <img
              key={pic}
              src={pic}
              alt=""
              className={i === currentPicture ? "show" : ""}
            />
          ))
        ) : (
          <img src="image-banner-montagne.png" className="showMontagne" alt="" />
        )}
      </div>

      {pictures && pictures.length > 0 && (
        <>
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length}
          </span>
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}
