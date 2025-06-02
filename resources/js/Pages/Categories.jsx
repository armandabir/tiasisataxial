import CatsContainer from "../components/catergories/CatsContainer";
import Header from "../components/catergories/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

export default function Categories () {
    return (
        <>
            <Navbar/>
            <Header/>
            <CatsContainer/>
            <Footer/>
            <div className="h-20"></div>
        </>
    )
}