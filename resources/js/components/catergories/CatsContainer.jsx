import { useEffect, useState } from "react"
import { BlueWhiteBg } from "../BlueWhiteBg"
import Button from "../Button"
import Card2 from "../Card2"
import styles from "./../../../css/styles/categories/categories.module.scss"
import { data } from "react-router-dom"

export default function CatsContainer({maincat}){
    const [cats,setCats]=useState([])

    async function fetchCats(maincat) {
        const res = await fetch(`http://localhost:3000/api/getcats/${maincat}`)
        const data = await res.json();
        setCats(data);
    }  
    
    
    useEffect(()=>{
        fetchCats(maincat);
    },[])

    console.log(cats)

    return (
        <section className={styles.categories}>
            <div className={styles.catsMenu}>
                <nav>
                    <h3>{maincat==2?"دسته بندی محصولات":"دسته بندی مقالات"}</h3>
                    <ul>
                        {
                            cats.map((cat)=><li key={cat.id}>{cat.name}</li>)
                        }
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

            <BlueWhiteBg className="absolute -z-10 -scale-y-[65%] top-2/3 md:top-1/2 -translate-y-2/4 left-1/2 -translate-x-1/2 h-4/5 w-full"/>
        </section>
    )
}