// import React from "react";
// import { DescriptionPanel } from "../components/DescriptionPanel";
// import { ImageBanner } from "../components/ImageBanner";
// import "./About.scss";

// function About() {
//   return (
//     <>
//       <ImageBanner />
//       <div className="about__container">
//         <DescriptionPanel title="Fiabilité" content="C'est très important" />
//         <DescriptionPanel title="Respect" content="C'est très important" />
//         <DescriptionPanel title="Service" content="C'est très important" />
//         <DescriptionPanel title="Responsabilité" content="C'est très important" />
//       </div>
//     </>
//   );
// }

// export default About;


// import AboutBanner from "../../components/AboutBanner/AboutBanner";
// import { ImageBanner } from "../components/ImageBanner.jsx";
import ImageBannerMontagne from "../layout/ImageBannerMontagne.jsx";
// import Collapse from "../../components/Collapse/Collapse";
import { DescriptionPanel } from "../components/DescriptionPanel";
// import aboutArray from "../../datas/aboutArray.json"; // j'ai créé un fichier JSON avec les données des collapses
import aboutArray from "../../public/about-note.json"

export default function About() {
	return (
		<>
			{/* <ImageBannerMontagne /> */}
      <ImageBannerMontagne />

			{aboutArray.map((rule, id) => (
				<DescriptionPanel
					key={id}
					title={rule.aboutTitle}
					content={rule.aboutText}
					// aboutStyle="about-style"
				/>
			))}
		</>
	);
}


