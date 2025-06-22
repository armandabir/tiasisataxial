import img from "./../../assets/blue-white-bg.png"
import appimgbg from "./../../assets/appsbg.png"
import mobileimg from "./../../assets/bgwbMobile.png"
import styles from "./../../css/styles/BlueWhiteBg.module.scss"
export function BlueWhiteBg({className,appimg}){
    const {innerWidth:width}=window;
        
    return(
        <div className={`${styles.container}  ${className}`}>
            <img src={innerWidth < 640 ? mobileimg : appimg ? appimgbg : img  } alt="" />
        </div>
    )
}