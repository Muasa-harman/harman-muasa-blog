import React from 'react'
import Hotel from "../../../public/assets/kigali.jpg";
import Finance from "../../../public/assets/dashboard.jpg";
import Property from "../../../public/assets/Listing.jpg";
import Delivery from "../../../public/assets/landing.png";
import Ecommerce from "../../../public/assets/Ecommerce.png";
import Dashboard from "../../../public/assets/dashboard.jpg";
import POS from "../../../public/assets/POS.png";
import ProjectCard from "@/components/ProjectCard";
 
const ProjectsPage = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Projects</h2>
            <div className="flex flex-wrap gap-4 justify-center">
                <ProjectCard title={"Data Dashboard"} target='_blank' rel='noopenernoreferrer' image={Dashboard} link={"https://savanna-test-beta.vercel.app/"}/>
                <ProjectCard title={"Financial Graphs Dashboard"} target='_blank' rel='noopenernoreferrer' image={Finance} link={"https://yala-finance-dashboard-demo.vercel.app/"}/>
                <ProjectCard title={"E-commerce shop application"} target='_blank' rel='noopenernoreferrer'  image={Ecommerce} link={'https://next-js-ecommerce-bspt103t6-yala-finance-dashboards-projects.vercel.app/'}/>
                <ProjectCard title={"Hotel Reservation System"} target='_blank' rel='noopenernoreferrer'  image={Hotel} link={"https://hotel-reservation-app-uesu.onrender.com/"}/>
                <ProjectCard title={"Property management System"} target='_blank' rel='noopenernoreferrer'  image={Property} link={"https://property-management-rh6h.onrender.com/"}/>
                <ProjectCard title={"Food Delivery Application"} target='_blank' rel='noopenernoreferrer'  image={Delivery} link={"https://donfiles-online-food-delivery-app.onrender.com"}/>
                {/* <ProjectCard title={"Work in Progress"} image={Property} category={undefined} link={undefined}/> */}
                <ProjectCard title={"POS System"} target='_blank' rel='noopenernoreferrer'  image={POS} link={"https://pointofsalesystem-pos.onrender.com/"}/>
            </div>
            </div>
      </div>
    </div>
  )
}

export default ProjectsPage