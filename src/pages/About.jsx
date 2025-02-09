
import React from "react"
import Banner from "../layout/Banner.jsx";
import { DescriptionPanel } from "../components/DescriptionPanel";
import aboutArray from "../../public/about-note.json"

export default function About() {
	return (
		<>
      <Banner 
      imageSrc="image-banner-montagne.png" 
      altText="Bannière principale" 
    />

			{aboutArray.map((rule, id) => (
				<DescriptionPanel
					key={id}
					title={rule.aboutTitle}
					content={rule.aboutText}
				/>
			))}
		</>
	);
}


