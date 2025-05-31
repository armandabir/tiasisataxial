import styles from "./../../../css/styles/categories/header.module.scss"
export default function Header(){
    return (
       <>
        <header className={styles.Header}>
            <div className={styles.content}>
                 <h3>دسته بندی</h3>
                 <ul>
                    <li>خانه . </li>
                    <li>دسته بندی</li>
                 </ul>

               
            </div>

             <div className={styles.searchBox}>
                <h4>دنبال محصول خاصی هستین ؟</h4>
                <div className={styles.search}>
                    <input type="text" />
                </div>
            </div>

            <div className={styles.headerBg}></div>
        </header>
       </>
    )   
}