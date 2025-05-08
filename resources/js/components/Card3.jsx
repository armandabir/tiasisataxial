import styles from "./../../css/styles/Card2.module.scss";
export default function Card3({img,tilte,date}){
    return (
        <article className={styles.card2}>
            <div className="h-60 rounded-xl overflow-hidden">
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="my-2">{tilte}</h3>
           
                <hr />  
                <div className="flex justify-between my-2">
                    <span>قیمت</span> <span>{`${price} هزار تومان`}</span>
                </div>
            </div>
        </article>
    )
}   