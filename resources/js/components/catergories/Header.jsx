import styles from "./../../../css/styles/categories/header.module.scss"
export default function Header(){
    return (
       <>
        <header className={styles.Header}>
            <p>دسته بندی</p>
            <div className={styles.headerBg}></div>
        </header>
       </>
    )   
}