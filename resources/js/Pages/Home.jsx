import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

export default function Home(){
    return(
       <>
          <Navbar/>
          <Slider imgs={["img1","img2","img3"]}/>
       </>
    )
}