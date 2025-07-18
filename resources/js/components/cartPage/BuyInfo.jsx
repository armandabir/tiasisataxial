import Button from "../Button"
import styles from "./../../../css/styles/cart/buyinfo.module.scss"
export default function BuyInfo({items}){
    const totalPrice=items.reduce((price,item)=>{
        return price + item.price * item.qty;
    },0)
    return (
        <div className={styles.buyinfo}>
            <h2>اطلات خرید</h2>
            <div className={styles.table}>
                <div>
                    <div>مجموع خرید</div>
                    <div>{totalPrice} تومان</div>
                </div>
                <div>
                    <div>تخفیف</div>
                    <div></div>
                </div>
                <div>
                    <div>مالیات بر ارزش افزوده</div>
                    <div></div>
                </div>
                <hr />
                <div>
                    <div>مبلغ قابل پرداخت</div>
                    <div>{totalPrice} تومان</div>
                </div>
               <div>
                 <Button className="w-1/2 bg-orange-400 h-10 mx-auto my-5">تکمیل پرداخت</Button>
               </div>
            </div>
        </div>
    )
}