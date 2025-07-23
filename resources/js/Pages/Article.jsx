import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Headers from "../Headers";
import ProjectMain from "../components/projects/ProjectMain";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Article(){
    const {id}=useParams();
    const [article,setArticle]=useState();
    
    async function fetchAricle() {
        const res = await fetch(`http://localhost:3000/api/article/${id}`);
        const data = await res.json();
        setArticle(data);
       
    }

    useEffect(()=>{
            fetchAricle()
    },[id])



    return(
        <>
        <Navbar/>
        {!article?(<div>Loading...</div>):

        (
        <>
            <Headers title={article.title} img={`/storage/articles/${article.pic}`} dark/>
            <ProjectMain project={article}/>
        </>
        )

        }
        <Footer/>
        </>
    )
    
}