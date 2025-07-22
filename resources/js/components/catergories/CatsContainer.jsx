import { useEffect, useState } from "react"
import { BlueWhiteBg } from "../BlueWhiteBg"
import Button from "../Button"
import Card2 from "../Card2"
import styles from "./../../../css/styles/categories/categories.module.scss"
import { data } from "react-router-dom"

export default function CatsContainer({maincat}){
    const [cats,setCats]=useState([])
    const [data,setData]=useState([])


    async function fetchCats(maincat) {
        const res = await fetch(`http://localhost:3000/api/getcats/${maincat}`)
        const data = await res.json();
        setCats(data);
       
    }  

    async function fetchProducts(cat=0) {
        const res =await fetch(`http://localhost:3000/api/getProducts/${cat}`)
        const data = await res.json();
        setData(data)
    }

    async function getAricles(cat=0) {
        const res =await fetch(`http://localhost:3000/api/getArticles/${cat}`)
        const data = await res.json();
        setData(data)
    }
    
    
    useEffect(()=>{
        fetchCats(maincat);
        if(maincat==2){
            fetchProducts(0)
        }

        if(maincat==1){
            getAricles(0)
        }

    },[])

    console.log(data)

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

            <div className="flex flex-col items-start md:w-10/12">
                <div className={styles.catsCards}>
                   
                    {
                        data.map((card)=><Card2 key={card.id} img={`/storage/products/${JSON.parse(card.pic)[0]}`} tilte={card.name} initLikes={25} price={card.price}/>)
                        
                    }
                       <Card2 img="./../../assets/ayegh.jpg" tilte="پکیج خدمات 1 " initLikes={25} price={700}/>

                </div>
             
                <Button className="w-1/3 bg-orange-400 my-5 mx-auto">مشاهده بیشتر</Button>
                
            </div>

            <BlueWhiteBg className="absolute -z-10 -scale-y-[65%] top-2/3 md:top-1/2 -translate-y-2/4 left-1/2 -translate-x-1/2 h-4/5 w-full"/>
        </section>
    )
}