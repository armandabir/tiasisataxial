import styles from "./../../css/styles/button.module.scss"
export default function Button ({children,className}){
    return (
        <button className={className}>{children}</button>
    )
}