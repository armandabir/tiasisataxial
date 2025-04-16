import styles from "./../../css/styles/navbar.module.scss"
import logo from  "./../../assets/logo.png"
import Button from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
export default function Navbar(){
    return ( 
        <nav className={styles.navbar}>
            <li className="hidden md:block">
                <div className="w-10/12 mx-auto text-center">
                    <img src={logo} alt="" />
                </div>
            </li>
            <li className={`${styles.navMid} hidden md:block`}>
                <ul>
                    <li>صفحه اصلی</li>
                    <li>خدمات</li>
                    <li>تماس با ما</li>
                    <li>محاسبات و براورد</li>
                    <li>پروژه ها</li>
                </ul>
            </li>
            <li className={`${styles.buttons} hidden md:block`}>
                <div className="w-10/12 mx-auto text-center relative">
                    <Button className="w-1/4 text-md bg-zinc-500 ml-2 relative">
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        <span className="absolute -bottom-2 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            0
                        </span>
                    </Button>
                    <Button className="w-3/4 bg-orange-400 text-md">ورود / ثبت نام</Button>
                </div>
            </li>
            <ul className={`${styles.mobileMenu} md:hidden`}>
                <li>موبایل</li>
                <li>موبایل</li>
                <li>موبایل</li>
                <li>موبایل</li>
                <li>موبایل</li>
            </ul>
        </nav>
    )
}