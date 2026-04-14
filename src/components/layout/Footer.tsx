import style from "../../styles/components/layout/Footer.module.css";

export default function Footer() {
return(

        <div className={style.footercontainer}>
        <p>FeedIn</p>

        <ul>
            <li>Home</li>
            <li>Privacy</li>
            <li>Contact</li>
        </ul>
    </div>
)
}
