import styles from "./../../css/styles/blog.module.scss"
import Button from "./Button"
import Card3 from "./Card3"
export default function Blog(){
    return(
        <section className={styles.Blog}>
            <div className={styles.container}>
                <div className="w-1/4 p-10 text-center flex flex-col justify-around">
                    <h2 className="font-iranSansBold text-2xl">وبلاگ   و اخبار</h2>
                    <Button className= "w-full bg-orange-400">مشاهده وبلاگ</Button>
                </div>
                <div className="w-3/4">
                    <Card3 img="" tilte="" date=""/>
                </div>
            </div>
        </section>
    )
}