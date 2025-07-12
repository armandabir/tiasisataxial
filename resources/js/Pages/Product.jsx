import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductDesc from "../components/Product/ProductDesc";
import ProductDetails from "../components/Product/ProductDetails";
import ProductSlide from "../components/Product/ProductSlide";

export default function Product({data}){
    console.log(data)
    return (
        <>
            <Navbar/>
            <ProductSlide/>
            <ProductDesc/>
            <ProductDetails/>
            <Footer/>
        </>
    )
}