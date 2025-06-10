import Features from "../About/Features";
import Intro from "../About/Intro";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Headers from "../Headers";
export default function About(){
    return (
        <>
        <Navbar/>
        <Headers/>
        <Intro/>
        <Features/>
        <Footer/>
        </>
    )
}