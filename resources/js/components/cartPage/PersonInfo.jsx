import styles from "./../../../css/styles/cart/personInfo.module.scss"
export default function personInfo(){
    return (
       <div className={styles.personInfo}>
            <h2>اطلاعات فردی</h2>
            <form action="" className={styles.formInfo}>
                <div>
                    <div>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div> 
                    <div>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
                <textarea name="description" id=""></textarea>
            </form>
       </div>
    )
}