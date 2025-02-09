import React from "react";
import "./Homepage.scss";
import Banner from "../layout/Banner.jsx";
import ApartmentGrid from "../components/ApartmentGrid.jsx";

function HomePage() {
  return (
    <>
       <Banner 
      imageSrc="image-banner.png" 
      altText="Bannière principale" 
	  textOverlay="Chez vous, partout et ailleurs"
    />
      <ApartmentGrid />
    </>
  );
}

export default HomePage;

