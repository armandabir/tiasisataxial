import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Headers from "../Headers";
import ProjectMain from "../components/projects/ProjectMain";


export default function Projects(){
    return(
        <>
        <Navbar/>
        <Headers title="انرژی های تجدید پذیر" img="/assets/projects/recycle.jpg" dark/>
        <ProjectMain/>
        <Footer/>
        </>
    )
}