import styles from "./../../css/styles/shop.module.scss"
import Button from "./Button"

export default function Shop(){
    return (
        <section className={styles.shop}>
            <div className={styles.banner}></div>
            <div className={styles.content}>
                <div>
                    <Button>مشاهده فروشگاه</Button>
                </div>
                <div className="order-first md:order-last">
                    <h2>فروشگاه اینترنتی آکسیال</h2>
                    <h3>بهترین محصولات را با تجربه کنید</h3>
                </div>
               
            </div>
        </section>
    )
}