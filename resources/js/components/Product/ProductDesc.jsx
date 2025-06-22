import styles from "./../../../css/styles/product/productdesc.module.scss"
import {BlueWhiteBg} from "./../BlueWhiteBg"
export default function ProductDesc(){
    return (
        <section className={styles.productDesk} >
            <h1>نام مربوط بکیج</h1>
            <BlueWhiteBg className="h-4/5 -scale-x-100 -rotate-3"/>
        </section>
    )
}