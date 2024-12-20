import React from "react";
import Portfoli1 from "../../../public/assets/Portfolio1.png";
import Portfoli2 from "../../../public/assets/Portfolio2.png";
import Portfoli3 from "../../../public/assets/Portfolio3.png";
import Hotel1 from "../../../public/assets/Hotel1.png";
import Yala1 from "../../../public/assets/Yala1.png";
import Hotel2 from "../../../public/assets/Hotel2.png";
import Hotel3 from "../../../public/assets/Hotel3.png";
import Property1 from "../../../public/assets/Property2.png";
import Property2 from "../../../public/assets/Property3.png";
import Property3 from "../../../public/assets/Property1.png";
import Sav1 from "../../../public/assets/Sav1.png";
import Sav2 from "../../../public/assets/Sav2.png";
import Sav3 from "../../../public/assets/Sav3.png";
import dash1 from "../../../public/assets/dash1.png";
import dash2 from "../../../public/assets/dash2.png";
import dash3 from "../../../public/assets/dash3.png";
import ProjectCard from "@/components/ProjectCard";
import gusi1 from "../../../public/assets/gusii1.png";
import gusi2 from "../../../public/assets/gusii2.png";
import gusi3 from "../../../public/assets/gusii3.png";
import Link from "next/link";

const projects = [
  {
    title: "Interactive Data Explorer",
    images: [dash1, dash2, dash3],
    link: "https://portfolio-profile-blush.vercel.app/",
    target: "_blank",
  },
  {
    title: "Contribution Collection App",
    images: [gusi1, gusi2, gusi3],
    link: "https://portfolio-profile-blush.vercel.app/",
    target: "_blank",
  },
  {
    title: "Dynamic Analytics Dashboard",
    images: [Sav1,Sav2,Sav3],
    link: "https://savanna-test-beta.vercel.app/",
    target: "_blank",
  },
  {
    title: "React Portfolio Dashboard",
    images: [Portfoli1, Portfoli2,Portfoli3],
    link: "https://myportfolioblogapp.onrender.com/",
    target: "_blank",
  },
  {
    title: "Property Management",
    images: [Property1, Property2,Property3],
    link: "https://property-management-rh6h.onrender.com/",
    target: "_blank",
  },
  {
    title: "Hotel Reservation",
    images: [Hotel1, Hotel2, Hotel3],
    link: "https://hotel-reservation-app-uesu.onrender.com/",
    target: "_blank",
  },
  {
    title: "IntelliVisual Dashboard",
    images: [Sav1, Sav2,Sav3],
    link: "https://savanna-test-beta.vercel.app/",
    target: "_blank",
  },
  {
    title: "POS SYSTEM",
    images: [Property1, Property2,Property3],
    link: "https://pointofsalesystem-pos.onrender.com/",
    target: "_blank",
  },
  {
    title: "Contribution Collection App",
    images: [gusi1, gusi2, gusi3],
    link: "https://portfolio-profile-blush.vercel.app/",
    target: "_blank",
  },
  {
    title: "Performance Analytics Panel",
    images: [Yala1, Yala1, Yala1],
    link: "https://yala-finance-dashboard-demo.vercel.app/",
    target: "_blank",
  },
  {
    title: "E-commerce",
    images: [dash1,dash2,dash3],
    link: "https://next-js-ecommerce-bspt103t6-yala-finance-dashboards-projects.vercel.app/",
    target: "_blank",
  },
  {
    title: "Food Delivery",
    images: [Portfoli1, Portfoli2,Portfoli3],
    link: "https://donfiles-online-food-delivery-app.onrender.com",
    target: "_blank",
  },
];

const ProjectsPage = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        <div className="flex flex-col gap-6">
          <Link href={"/"}>
            <h2 className="text-2xl font-semibold text-center hover:text-green-800 focus:border-green-500">
              Recent Projects
            </h2>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-center">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                target="_blank"
                rel="noopener noreferrer"
                images={project.images}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
