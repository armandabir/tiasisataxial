import styles from "./../../../css/styles/services/cards.module.scss"
import {BlueWhiteBg} from "./../BlueWhiteBg"
import Card from "./card"
export default function Cards (){

    const services = [
        {
            title:"کارت1",
            desc:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
            img:"./assets/services/s1.jpg",
            tags : [{title : "هشتک1"},{title:"هشتگ 2"}]
            
        },

           {
            title:"کارت1",
            desc:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،",
            img:"./assets/services/s1.jpg",
            tags : [{title : "هشتک1"},{title:"هشتگ 2"}]
            
        },

    ]
    return (
        <section className={styles.cards}>
            <div className={styles.container}>
                {
                    services.map((service,index)=><Card index={index} title={service.title} desc={service.desc} img={service.img} tags={service.tags}/>)
                }
            </div>
            <BlueWhiteBg className="w-full -scale-x-100 scale-y-75 absolute"/>
            <BlueWhiteBg className="w-full bottom-0 scale-y-75 absolute"/>
        </section>
    )
}