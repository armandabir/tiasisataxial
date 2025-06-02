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

            <div className={styles.catsCards}>
                <Card2 img="./../../assets/ayegh.jpg" tilte="پکیج خدمات 1 " initLikes={25} price={700}/>
                <Card2 img="./../../assets/ayegh.jpg" tilte="پکیج خدمات 1 " initLikes={25} price={700}/>
                <Card2 img="./../../assets/ayegh.jpg" tilte="پکیج خدمات 1 " initLikes={25} price={700}/>
                <Card2 img="./../../assets/ayegh.jpg" tilte="پکیج خدمات 1 " initLikes={25} price={700}/>
                <Card2 img="./../../assets/ayegh.jpg" tilte="پکیج خدمات 1 " initLikes={25} price={700}/>
                <Card2 img="./../../assets/ayegh.jpg" tilte="پکیج خدمات 1 " initLikes={25} price={700}/>
            </div>
        </section>
    )
}