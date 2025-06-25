import { useState } from "react"
import styles from "./../../../css/styles/product/productSlide.module.scss"
import TransitionSection from "../TransitionSection"
import Button from "./Button"
export default function ProductSlide(){
    const [img,setImage]=useState("/assets/product/product-img.jpg");

    return(
       <section className={styles.productSlide}>
            <img src={img} alt=""/>
            <div className={styles.btContainer}>
                 <Button setImg={()=>setImage("/assets/product/product-img.jpg")}/>
                 <Button setImg={()=>setImage("/assets/product/product-img-5.jpg")}/>
                 <Button setImg={()=>setImage("/assets/product/product-img-5.jpg")}/>
                 <Button setImg={()=>setImage("/assets/product/product-img-5.jpg")}/>
                
            </div>

          <TransitionSection className="z-40 bottom-0 md:h-28 h-10"/>            
       </section> 
    )
}