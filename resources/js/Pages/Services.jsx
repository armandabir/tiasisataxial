import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Cards from "../components/services/Cards";
import Headers from "../Headers";

export default function Services (){
    return (
        <>
            <Navbar/>
            <Headers img="./assets/services.jpg" title="خدمات" dark/>
            <Cards/>
            <Footer/>
        </>
    )
}