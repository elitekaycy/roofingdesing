import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "../Components/Banner/Banner";
import RoofingNavigation from "../Components/Nav/RoofingNavigation";
import Herosection from "../Components/Hero/Herosection";
import AboutComponent from "../Components/About/AboutComponent";
import ServiceComponent from "../Components/Service/ServiceComponent";
import ProjectComponent from "../Components/Project/ProjectComponent";
import QualityComponent from "../Components/Service/QualityComponent";
import Location from '../Components/footer/Location'
import Footer from "../Components/footer/Footer";
import GalleryComponent from "../Components/Service/GalleryComponent";

// markup
const IndexPage = () => {
 
  return (
    <main style={{ position: 'relative',overflow: 'hidden',}}>
    <Banner />
    <RoofingNavigation />
    <Herosection />
    <AboutComponent />
    <ServiceComponent />
    <GalleryComponent />
    <ProjectComponent />
    <QualityComponent />
    <Location />
    <Footer />
    </main>
  )
}

export default IndexPage
