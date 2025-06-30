import Features from "../components/About/Features";
import Goals from "../components/About/goals";
import Intro from "../components/About/Intro";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Headers from "../Headers";
export default function About(){
    return (
        <>
        <Navbar/>
        <Headers img="./assets/1.jpg"/>
        <Intro/>
        <Features/>
        <Goals/>
        <Footer/>
        </>
    )
}