import { BlueWhiteBg } from "../BlueWhiteBg"
import Button from "../Button"
import Card2 from "../Card2"
import styles from "./../../../css/styles/categories/categories.module.scss"

export default function CatsContainer(){
    return (
        <section className={styles.categories}>
            <div className={styles.catsMenu}>
                <nav>
                    <h3>دسته بندی محصولات</h3>
                    <ul>
                        <li>دسته شماره 1</li>
                        <li>دسته شماره 1</li>
                        <li>دسته شماره 1</li>
                        <li>دسته شماره 1</li>
                        <li>دسته شماره 1</li>
                    </ul>
                </nav>
            </div>

            <div className="flex flex-col items-center">
                <div className={styles.catsCards}>
                    <Card2 img="./../../assets/ayegh.jpg" tilte="پکیج خدمات 1 " initLikes={25} price={700}/>
                    <Card2 img="./../../assets/ayegh.jpg" tilte="پکیج خدمات 1 " initLikes={25} price={700}/>
                    <Card2 img="./../../assets/ayegh.jpg" tilte="پکیج خدمات 1 " initLikes={25} price={700}/>
                    <Card2 img="./../../assets/ayegh.jpg" tilte="پکیج خدمات 1 " initLikes={25} price={700}/>
                    <Card2 img="./../../assets/ayegh.jpg" tilte="پکیج خدمات 1 " initLikes={25} price={700}/>
                    <Card2 img="./../../assets/ayegh.jpg" tilte="پکیج خدمات 1 " initLikes={25} price={700}/>
                </div>
             
                <Button className="w-1/3 bg-orange-400 my-5">مشاهده بیشتر</Button>
                
            </div>

            <BlueWhiteBg className="absolute -z-10 -scale-y-[65%] top-1/4 -translate-y-1/5 left-1/2 -translate-x-1/2 w-full"/>
        </section>
    )
}