import EngServices from "../components/EngServices";
import Navbar from "../components/Navbar";
import SaleAgency from "../components/SaleAgency";
import Slider from "../components/Slider";

export default function Home(){
    return(
       <>
          <Navbar/>
          <Slider/>
          <EngServices/>
          <SaleAgency/>
          <div className="min-h-20"></div>
       </>
    )
}