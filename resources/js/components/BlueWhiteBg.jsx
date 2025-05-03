import img from "./../../assets/blue-white-bg.png"
import mobileimg from "./../../assets/bgwbMobile.png"
import styles from "./../../css/styles/BlueWhiteBg.module.scss"
export function BlueWhiteBg({className}){
    const {innerWidth:width}=window;
        
    return(
        <div className={`${styles.container}  ${className}`}>
            <img src={innerWidth < 640 ? mobileimg : img } alt="" />
        </div>
    )
}