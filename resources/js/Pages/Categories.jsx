import { useParams } from "react-router-dom";
import CatsContainer from "../components/catergories/CatsContainer";
import Header from "../components/catergories/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Categories () {
    const {cat}=useParams();

    return (
        <>
            <Navbar/>
            <Header/>
            <CatsContainer maincat={cat}/>
            <Footer/>
            <div className="h-20"></div>
        </>
    )
}