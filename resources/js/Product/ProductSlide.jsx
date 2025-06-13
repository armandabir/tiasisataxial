import styles from "./../../css/styles/product/productSlide.module.scss"
export default function ProductSlide(){
    return(
       <section className={styles.productSlide}>
            <img src="/assets/product/product-img.jpg" alt="" />
       </section> 
    )
}