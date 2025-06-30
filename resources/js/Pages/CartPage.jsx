import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Headers from "../Headers";

export default function CardPage(){
    return (
        <>
        <Navbar/>
        <Headers img="./../../assets/cart.jpg" dark title="سبد خرید"/>
        <Footer/>
        </>
    )
}