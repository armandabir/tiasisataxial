import styles from "./../../../css/styles/cart/cart.module.scss"
import Balance from "./Balance";
import BuyInfo from "./BuyInfo";

export default function Cart(){
    return (
        <section className={styles.cart}>
            <div className={styles.shopCart}>
                <Balance/>
            </div>
            <div className={styles.info}>
                <BuyInfo/>
            </div>
        </section>
    )
}