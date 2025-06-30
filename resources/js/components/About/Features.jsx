import styles from "./../../../css/styles/About/features.module.scss"
import product from "./.././../../assets/about/contact-support.png"
import quality from "./../../../assets/about/w3c.png"
import service from "./../../../assets/about/w3c2 1.png"
import price from "./../../../assets/about/vector.png"
export default function Features(){
    return (
        <section className={styles.features}>
            <h2>ویژگی های تیم ما</h2>
            <div className={styles.content}>
                <div className={styles.fade}></div>

                <div className={styles.card}>
                    <div>
                        <img src={price} alt="" />
                    </div>
                    <p>مناسب‌ترین قیمت نسبت به بازار</p>
                </div>

                <div className={styles.card}>
                    <div>
                        <img src={product} alt="" />
                    </div>
                    <p>تمامی محصولات دارای گارانتی</p>
                </div>

                <div className={styles.card}>
                    <div>
                        <img src={quality} alt="" />
                    </div>
                    <p>تمامی محصولات دارای گارانتی</p>
                </div>

                <div className={styles.card}>
                    <div>
                        <img src={service} alt="" />
                    </div>
                    <p>تمامی محصولات دارای گارانتی</p>
                </div>

            </div>
        </section>
    )
}