import styles from "./../../../css/styles/services/card.module.scss"
export default function Card ({title,desc,tags,img,index}){
    return (
        <div className={styles.card}>
            <div className={`${index % 2 == 0 ? styles.order :""}`}>
                <img src={img} alt="" />
            </div>
            <div>
                {
                    tags.map((tag)=><span>{tag.title}</span>)
                }
                
                <h2>{title}</h2>
                <p>
                    {desc}
                </p>
                <button>جزییات بیشتر</button>
            </div>
        </div>
    )
}