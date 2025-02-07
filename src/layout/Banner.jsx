import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <div className='Banner'>
    <div class="image-container">
      <img src="image-banner.png" alt="Votre description d'image"></img>
      <div class="text-overlay">Chez vous, partout et ailleurs</div>
    </div>
  </div>
  );
}

export default Banner;
