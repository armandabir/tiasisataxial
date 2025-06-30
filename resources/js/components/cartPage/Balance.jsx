import styles from "./../../../css/styles/cart/balance.module.scss"
export default function Balance(){
    return (
        <div className={styles.balance}>
            <h2>موجودی سبد خرید</h2>
            <ul className={styles.balanceNav}>
                <li>نام محصول</li>
                <li>قیمت</li>
                <li>تعداد</li>
                <li>حذف</li>
            </ul>
            <ul className={styles.balanceInfo}>
                <li>
                    <ul>
                        <li>پکیج شماره 1</li>
                        <li>2000000 تومان</li>
                        <li>
                            <input type="number" value="10"  />
                        </li>
                        <li>
                            icon
                        </li>
                    </ul>
                </li>

                  <li>
                    <ul>
                        <li>پکیج شماره 1</li>
                        <li>2000000 تومان</li>
                        <li>
                            <input type="number" value="10"  />
                        </li>
                        <li>
                            icon
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}