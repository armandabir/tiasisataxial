import styles from "./../../css/styles/navbar.module.scss"

export default function Navbar(){
    return ( 
        <nav className={styles.navbar}>
            <li>
                <div className="w-10/12 mx-auto text-center">
                    تست
                </div>
            </li>
            <li className={styles.navMid}>
                <ul>
                    <li>تست1</li>
                    <li>تست2</li>
                    <li>تست3</li>
                    <li>تست4</li>
                    <li>تست5</li>
                </ul>
            </li>
            <li>
                <div className="w-10/12 mx-auto text-center">
                دکمه ها
                </div>
            </li>
        </nav>
    )
}