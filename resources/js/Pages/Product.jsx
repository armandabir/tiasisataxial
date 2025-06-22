import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductDesc from "../components/Product/ProductDesc";
import ProductSlide from "../components/Product/ProductSlide";

export default function Product(){
    return (
        <>
            <Navbar/>
            <ProductSlide/>
            <ProductDesc/>
            <Footer/>
        </>
    )
}