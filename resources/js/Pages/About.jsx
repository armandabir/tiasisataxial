import Features from "../About/Features";
import Goals from "../About/goals";
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
        <Goals/>
        <Footer/>
        </>
    )
}