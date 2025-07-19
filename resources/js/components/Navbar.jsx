import styles from "./../../css/styles/navbar.module.scss"
import logo from  "./../../assets/logo.png"
import Button from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "./store/CartContext";

export default function Navbar(){
    const {items} = useContext(CartContext);
    const totalCart=items.reduce((totalItems,item)=>{
        return totalItems + item.qty;
    },0)

    console.log(items)

    function handleLoginBt(){
        window.location.href = "/admin/dashboard";
    }
    return ( 
        <nav className={styles.navbar}>
            <li className="hidden md:block">
                <div className="w-10/12 mx-auto text-center">
                    <img src={logo} alt="" />
                </div>
            </li>
            <li className={`${styles.navMid} hidden md:block`}>
                <ul>
                    <li>
                        <Link to="/">صفحه اصلی</Link>
                    </li>
                    <li>
                        <Link to="/services">خدمات</Link>
                    </li>
                    <li>
                        <Link to="/about">تماس با ما</Link>
                    </li>
                    <li>محاسبات و براورد</li>
                    <li>
                        <Link to="/projects">پروژه ها</Link>
                    </li>
                </ul>
            </li>
            <li className={`${styles.buttons} hidden md:block`}>
                <div className="w-10/12  mx-auto text-center relative">
                    <Link to="/cart" className="w-1/4 h-2/3 m-1">
                        <Button className="h-full text-md bg-zinc-500 ml-2 relative">
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                            <span className="absolute -bottom-2 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {totalCart}
                            </span>
                        </Button>
                    </Link>
                    <Button className="w-3/4 h-3/5 bg-orange-400 xl:p-3 sm:text-xs" onclick={handleLoginBt}>ورود / ثبت نام</Button>
                </div>
            </li>
            <div className={styles.callBt}>
                <a href=""></a>
            </div>
            <ul className={`${styles.mobileMenu} md:hidden`}>
                <li>
                    <ul>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faHouse}/>
                                <p>خانه</p>    
                            </a>
                        </li>
                      
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faUser} />
                                <p>ورود</p>
                            </a>
                        </li>
                    </ul>
                </li>
               
                <li>
                    <ul>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faCalculator}/>
                                <p>محاسبات</p>
                            </a>
                        </li>
                        <li className="relative">
                            <a href="">
                                <FontAwesomeIcon icon={faShoppingCart}/>
                                <span className="absolute -top-3 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                0
                                </span>
                                <p>سبد خرید</p>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}