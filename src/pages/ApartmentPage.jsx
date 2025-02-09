import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import db from "../../public/db.json"; 
import { ApartmentHeader } from "../components/ApartmentHeader";
import { DescriptionPanel } from "../components/DescriptionPanel";
import "./ApartmentPage.scss";
import ImageBanner from "../components/ImageBanner";  


function ApartmentPage() {
  const { id } = useParams();
    const logement = db.find((logement) => logement.id === id);
  if (!logement) {
    return <Navigate replace to="/404" />;
  }

  const equipements = logement.equipments.map((equipment, i) => (
    <ul key={i}>
      <li>{equipment}</li>
    </ul>
  ));

  return (
    <div className="apartment-page">
      <ImageBanner pictures={logement.pictures} />
      <ApartmentHeader
        title={logement.title}
        location={logement.location}
        tags={logement.tags}
        host={logement.host}
        rating={logement.rating}
      />
      <div className="description-container">
      <DescriptionPanel
        title="description"
        content={logement.description}
        
      />
      <DescriptionPanel
      title="equiments"
      content={equipements}
      />

      </div>
      
    </div>
  );
}

export default ApartmentPage;
