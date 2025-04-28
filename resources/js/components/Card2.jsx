import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import styles from "./../../css/styles/Card2.module.scss";
export default function Card2({img,tilte,likes,price}){
    return (
        <article className={styles.card2}>
            <div className="h-60 rounded-xl overflow-hidden">
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="my-2">{tilte}</h3>
                <div className="w-1/2 mr-auto text-left">
                    <span className="ml-2">{likes}</span>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <hr />  
                <div className="flex justify-between">
                    <span>قیمت</span> <span>{`${price} هزار تومان`}</span>
                </div>
            </div>
        </article>
    )
}