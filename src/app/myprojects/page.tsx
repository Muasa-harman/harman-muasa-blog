import React from 'react'
import Hotel from "../../../public/assets/kigali.jpg";
import Finance from "../../../public/assets/dashboard.jpg";
import Property from "../../../public/assets/Listing.jpg";
import Delivery from "../../../public/assets/landing.png";
import Harman from "../../../public/assets/harman.png";
import Ecommerce from "../../../public/assets/Ecommerce.png";
import POS from "../../../public/assets/POS.png";
import ProjectCard from "@/components/ProjectCard";
import  Dashboard from "../../../public/assets/Dashboard.png"
import Link from 'next/link';
 
const ProjectsPage = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        <div className="flex flex-col gap-6">
          <Link href={'/'}>
          <h2 className="text-2xl font-semibold text-center hover:text-green-800 focus:border-green-500">Recent Projects</h2>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-center">
            <ProjectCard title={"Root blog in React and Nodejs"} target='_blank' rel='noopener noreferrer' image={Harman} link={"https://myportfolioblogapp.onrender.com/"} />
            <ProjectCard title={"Data Dashboard"} target='_blank' rel='noopener noreferrer' image={Dashboard} link={"https://savanna-test-beta.vercel.app/"} />
            <ProjectCard title={"Financial Graphs Dashboard"} target='_blank' rel='noopener noreferrer' image={Finance} link={"https://yala-finance-dashboard-demo.vercel.app/"} />
            <ProjectCard title={"E-commerce shop application"} target='_blank' rel='noopener noreferrer' image={Ecommerce} link={'https://next-js-ecommerce-bspt103t6-yala-finance-dashboards-projects.vercel.app/'} />
            <ProjectCard title={"Hotel Reservation System"} target='_blank' rel='noopener noreferrer' image={Hotel} link={"https://hotel-reservation-app-uesu.onrender.com/"} />
            <ProjectCard title={"Property management System"} target='_blank' rel='noopener noreferrer' image={Property} link={"https://property-management-rh6h.onrender.com/"} />
            <ProjectCard title={"Food Delivery Application"} target='_blank' rel='noopener noreferrer' image={Delivery} link={"https://donfiles-online-food-delivery-app.onrender.com"} />
            <ProjectCard title={"POS System"} target='_blank' rel='noopener noreferrer' image={POS} link={"https://pointofsalesystem-pos.onrender.com/"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
