import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "./../../css/styles/Card2.module.scss";
export default function Card2({img,tilte,likes,price}){
    return (
        <article className={styles.Card2}>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{tilte}</h3>
                <div>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    <span>{likes}</span>
                </div>
                <hr />  
                <div>
                    <span>قیمت</span> <span>{price}</span>
                </div>
            </div>
        </article>
    )
}