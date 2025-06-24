import styles from "./../../../css/styles/product/productdetails.module.scss"
import Button from "./../Button"
import checkmark from "./../../../assets/checkmark.png"
export default function ProductDetails(){
    return (

        <section className={styles.ProductDetails}>
       <div className={styles.detailBox}>
            <div>
                <div className={styles.imgContainer}>
                     <img src="/assets/product/product-img-5.jpg" alt="" />
                </div>
            </div>
            <div className={styles.details}>
                <h2>جزییات پکیج</h2>
                <p>
                    لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای  متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه  درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
                </p>
                <div className={styles.productProp}>
                    <img className="mx-4" src={checkmark} alt="" />
                    <span className="p-1">توضیحات مربوط به مزیت شماره 1</span>
                </div>

                <div className={styles.productProp}>
                    <img className="mx-4" src={checkmark} alt="" />
                    <span className="p-1">توضیحات مربوط به مزیت شماره 1</span>
                </div>

                <div className={styles.productProp}>
                    <img className="mx-4" src={checkmark} alt="" />
                    <span className="p-1">توضیحات مربوط به مزیت شماره 1</span>
                </div>

                <div className={styles.productProp}>
                    <img className="mx-4" src={checkmark} alt="" />
                    <span className="p-1">توضیحات مربوط به مزیت شماره 1</span>
                </div>

            </div>
       </div>
       <p className="px-20 py-6 text-justify">
            لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای  متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه  درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
            لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای  متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه  درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
            لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای  متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه  درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد

       </p>

       <Button className="bg-orange-400 w-1/4 mx-[38%]">خرید محصول</Button>
    </section>
    )
}