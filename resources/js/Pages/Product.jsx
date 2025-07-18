import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductDesc from "../components/Product/ProductDesc";
import ProductDetails from "../components/Product/ProductDetails";
import ProductSlide from "../components/Product/ProductSlide";
import Button from "../components/Button";
import { useContext } from "react";
import CartContext from "../components/store/CartContext";

export default function Product({data}){
    const {id}=useParams();
    const {addItem}=useContext(CartContext);
    function HandleAddtoCart(){
        addItem(
            {id,
              "price":20000,
              "name":"محصول تست"      
            }
         )
    }
    return (
        <>
            <Navbar/>
            <ProductSlide/>
            <ProductDesc/>
            <ProductDetails/>
            <Button className="bg-orange-400 md:w-1/4 w-4/5 md:mx-[38%] mx-[10%]" onclick={HandleAddtoCart}>خرید محصول</Button>
            <Footer/>
        </>
    )
}