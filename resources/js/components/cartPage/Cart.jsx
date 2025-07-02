import styles from "./../../../css/styles/cart/cart.module.scss"
import Balance from "./Balance";
import BuyInfo from "./BuyInfo";
import Discount from "./Discount";
import PersonInfo from "./PersonInfo";
export default function Cart(){
    return (
        <section className={styles.cart}>
            <div className={styles.shopCart}>
                <Balance/>
                <Discount/>
                <PersonInfo/>
            </div>
            <div className={styles.info}>
                <BuyInfo/>
            </div>
        </section>
    )
}