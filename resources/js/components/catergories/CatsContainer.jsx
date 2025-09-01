import { useEffect, useState } from "react"
import { BlueWhiteBg } from "../BlueWhiteBg"
import Button from "../Button"
import Card2 from "../Card2"
import styles from "./../../../css/styles/categories/categories.module.scss"
import Card3 from "../Card3"


export default function CatsContainer({maincat}){
    const [cats,setCats]=useState([])
    const [data,setData]=useState([])


    function handleCartClick(id){

         if(maincat==3){
            window.location.href=`/projects/${id}`
        }


        if(maincat==2){
            window.location.href=`/product/${id}`
        }

        if(maincat==1){
            window.location.href=`/article/${id}`    
        }
    }
    


    function handleCatBt(cat){

        

        if(maincat==2){
            fetchProducts(cat)
        }

        if(maincat==1){
            fetchAricles(cat)
        }

        if(maincat==3){
            fetchProjects(cat)
        }

    }

    async function fetchCats(maincat) {
        const res = await fetch(`/api/getcats/${maincat}`)
        const data = await res.json();
        setCats(data);
       
    }  

    async function fetchProducts(cat=0) {
        const res =await fetch(`/api/getProducts/${cat}`)
        const data = await res.json();
        setData(data)
    }

    async function fetchAricles(cat=0) {
        const res =await fetch(`/api/getArticles/${cat}`)
        const data = await res.json();
        setData(data)
    }


        async function fetchProjects(cat=0) {
        const res =await fetch(`/api/getProjects/${cat}`)
        const data = await res.json();
        setData(data)
    }
    
    
    useEffect(()=>{
        fetchCats(maincat);
        if(maincat==2){
            fetchProducts(0)
        }

        if(maincat==1){
            fetchAricles(0)
        }

          if(maincat==3){
            fetchProjects(0)
        }

    },[maincat])

    console.log(data)

    return (
        <section className={styles.categories}>
            <div className={styles.catsMenu}>
                <nav>
                    <h3>{maincat==2?"دسته بندی محصولات":"دسته بندی مقالات"}</h3>
                    <ul>
                        {
                            cats.map((cat)=><li onClick={()=>handleCatBt(cat.id)} key={cat.id}>{cat.name}</li>)
                        }
                    </ul>
                </nav>
            </div>

            <div className="flex flex-col items-start md:w-10/12">
                <div className={styles.catsCards}>
                   
                    {
                        data.map((card)=>{
                            if(maincat==2){
                                return <Card2 key={card.id} img={`/storage/products/${JSON.parse(card.pic)[0]}`} tilte={card.name} initLikes={25} price={card.price} onclick={()=>handleCartClick(card.id)}/>
                            }

                              if(maincat==3){
                                return <Card2 key={card.id} img={`/storage/projects/${card.pic}`} tilte={card.title} initLikes={25} onclick={()=>handleCartClick(card.id)}/>
                             }

                            if(maincat==1){
                                return  <Card3 
                                            key={card.id}  
                                            img={`/storage/articles/${card.pic}`} 
                                            tilte={card.title} 
                                            date={card.updated_at ? card.updated_at.split('T')[0] : ''} // Only date part
                                            onclick={()=>handleCartClick(card.id)}
                                        />
                            }
                        })
                        
                    }
                      

                </div>
             
                <Button className="w-1/3 bg-orange-400 my-5 mx-auto">مشاهده بیشتر</Button>
                
            </div>

            <BlueWhiteBg className="absolute -z-10 -scale-y-[65%] top-2/3 md:top-3/4 -translate-y-2/4 left-1/2 -translate-x-1/2 h-4/5 w-full"/>
        </section>
    )
}