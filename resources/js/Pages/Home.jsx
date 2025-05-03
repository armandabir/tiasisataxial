import Approch from "../components/Approch";
import EngServices from "../components/EngServices";
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
          <div className="min-h-20"></div>
       </>
    )
}