import styles from "./../../css/styles/product/productSlide.module.scss"
export default function ProductSlide(){
    return(
       <section className={styles.productSlide}>
            <img src="/assets/product/product-img.jpg" alt="" />
            <div className={styles.btContainer}>
                 <button>
                    <img src="/assets/product/product-img-5.jpg" alt="" />
                </button>
                  <button>
                    <img src="/assets/product/product-img-5.jpg" alt="" />
                </button>
                  <button>
                    <img src="/assets/product/product-img-5.jpg" alt="" />
                </button>
                  <button>
                    <img src="/assets/product/product-img-5.jpg" alt="" />
                </button>
            </div>
       </section> 
    )
}