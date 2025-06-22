import styles from "./../../../css/styles/product/button.module.scss"
export default function Button({img,setImg}){
    return (
        <button onClick={setImg}>
            <img src="/assets/product/product-img-5.jpg" alt="" />
        </button>
    )
}