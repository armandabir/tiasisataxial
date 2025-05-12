import Approch from "../components/Approch";
import Apps from "../components/Apps";
import Blog from "../components/Blog";
import EngServices from "../components/EngServices";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SaleAgency from "../components/SaleAgency";
import Shop from "../components/Shop";
import Slider from "../components/Slider";

export default function Home(){
    return(
       <>
          <Navbar/>
          <Slider/>
          <EngServices/>
          <SaleAgency/>
          <Shop/>
          <Approch/>
          <Blog/>
          <Apps/>
          <Footer/>
          <div className="h-20"></div>
       </>
    )
}