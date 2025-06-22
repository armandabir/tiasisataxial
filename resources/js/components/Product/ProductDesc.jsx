import styles from "./../../../css/styles/product/productdesc.module.scss"
import {BlueWhiteBg} from "./../BlueWhiteBg"
export default function ProductDesc(){
    return (
        <section className={styles.productDesk} >
            <h1>نام مربوط بکیج</h1>
            <div className={styles.general}>
                <h2 className={styles.title}>توضیحات کلی</h2>
                <p>
                    ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                    ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                </p>
            </div>
            <BlueWhiteBg className="h-4/5 absolute scale-x-110 -rotate-4 -z-10" appimg/>
        </section>
    )
}